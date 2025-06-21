function passwordValidator(password, cb) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])([^\s]){8,}$/;
    if (!regex.test(password)) {
        return cb('Password must be at least 8 characters long and contain lowercase, uppercase, digit, special char, and no spaces.');
    }
    cb(); // This means the password is valid
}

module.exports=passwordValidator;