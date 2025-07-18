module.exports.isloggedin = (req, res, next) => {
    // 1. Check if the user is authenticated at all.
    if (!req.isAuthenticated()) {
        req.session.redirecturl = req.originalUrl;
        return res.status(401).json({ message: "You must be logged in to access this." });
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
    if(req.user){
        return next();
    }
    res.send("You must be logged in to perform this action.");
}