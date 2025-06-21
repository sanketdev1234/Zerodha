const User=require("../model/UserSchema.js");


module.exports.renderRegisterForm=(req , res)=>{
    res.send("registration form");
    };

    module.exports.renderLoginForm=(req , res)=>{
        res.send("login form");
        }

        module.exports.register=async(req,res)=>{
            try{
            let username=req.body.username;
            let email=req.body.email;
            let password=req.body.password;
            const newuser={
                email:email,
                username:username,
                ifMfaActive: false,
                };
            let newly_added_user=await User.register(newuser,password);
            console.log(newly_added_user);
        
            //automatically login after signup {start
            req.login(newly_added_user , (error)=>{
                if(error){ // error will occur if the user is not signed in
                    return next(error);
                }
                console.log("registration done! welcome to Zerodha")
                console.log(req.user) 
                // res.redirect("/");
                res.send("registration done! welcome to Zerodha");
            }); //till this end}
            
        }
        catch(error){
            console.log(error);
            // res.redirect("/user/registerform");
            res.send("registration failed! please try again");
        }
        }


        module.exports.login=async(req  , res)=>{
            const user = await User.findById(req.user._id);

            if (user.ifMfaActive) {
                // If the user has MFA enabled, signal to the frontend that
                // the second factor is required. The login is not yet complete.
                return res.json({ mfaRequired: true });
            }

            if(res.locals.redirecturl){
            console.log("login successfull! welcome-back to Zerodha");
            console.log(req.user) 
                // res.redirect(res.locals.redirecturl);
                res.send("login successfull! welcome-back to Zerodha");
            }
            else {
                console.log("login successfull! welcome-back to Zerodha");
                console.log(req.user) 
                // res.redirect("/");
                res.send("login successfull! welcome-back to Zerodha");
            }
        
        };

        module.exports.logout=(req , res, next)=>{
            req.logout((error)=>{ 
                if(error){
                    return next(error);
                }
                // Explicitly destroy the session to clear all flags
                req.session.destroy((err) => {
                    if (err) {
                        return next(err);
                    }
                    console.log("logout done");
                    res.send("logout done");
                });
            })
        }

    module.exports.authstatus=(req,res,next)=>{
            if(req.user)
{
    res.send("user is logged in");
    console.log(req.user) 
}
else{
    res.send("user is not logged in");
    console.log(req.user) 
}
next();
        }