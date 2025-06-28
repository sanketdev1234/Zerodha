const speakeasy = require('speakeasy');
const QRCode = require('qrcode');
const User = require('../model/UserSchema');

module.exports.setup2fa = async (req, res) => {
    try {
        const secret = speakeasy.generateSecret({
            name: `SanketStock (${req.user.email})`,
        });

        await User.findByIdAndUpdate(req.user._id, {
            twoFactorSecret: secret.base32,
        });

        QRCode.toDataURL(secret.otpauth_url, (err, data_url) => {
            if (err) {
                return res.status(500).json({ status: 'error', message: 'Could not generate QR code.' });
            }
            res.json({
                message: 'MFA setup initiated. Scan the QR code with your authenticator app.',
                qrCodeUrl: data_url,
                secret: secret.base32, // Send secret for debugging or manual entry
            });
        });
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'An error occurred during 2FA setup.' });
    }
};

module.exports.verify2fa = async (req, res) => {
    try {
        console.log(req.user);
        const  {token}  = req.body;
        const user = await User.findById(req.user._id);
        console.log(user);
        console.log(user.twoFactorSecret);
        console.log(token);
        console.log(typeof(token));
        if (!user || !user.twoFactorSecret) {
            return res.status(400).json({ status: 'error', message: '2FA not set up for this user.' });
        }

        const verified = speakeasy.totp.verify({
            secret: user.twoFactorSecret,
            encoding: 'base32',
            token: token,
        });
        console.log(verified)
        if (verified) {
            await User.findByIdAndUpdate(req.user._id, { ifMfaActive: true });
            
            req.session.isMfaActive = true;

            res.json({ status: 'success', message: '2FA verified successfully.' });
        } else {
            res.status(400).json({ status: 'error', message: 'Invalid token.' });
        }
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'An error occurred during 2FA verification.' });
    }
};

module.exports.reset2fa = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user._id, {
            ifMfaActive: false,
            twoFactorSecret: null,
        });
        res.json({ status: 'success', message: '2FA has been disabled.' });
    } catch (e) {
        res.status(500).json({ status: 'error', message: 'An error occurred while disabling 2FA.' });
    }
};