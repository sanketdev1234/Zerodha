module.exports.isloggedin = (req, res, next) => {
    // 1. Check if the user is authenticated at all.
    if (!req.isAuthenticated()) {
        req.session.redirecturl = req.originalUrl;
        return res.status(401).json({ message: "You must be logged in to access this." });
    }

    // 2. Check if the user has MFA enabled on their account, but has NOT yet
    //    verified it for this specific session.
    if (req.user.ifMfaActive && !req.session.isMfaActive) {
        return res.status(403).json({ message: "MFA is required for this action.", mfaRequired: true });
    }
    
    // 3. If all checks pass, allow access.
    next();
}
 
module.exports.saveredirecturl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.middlewarefor2fs=(req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.send("please login to access the functionalities");
}