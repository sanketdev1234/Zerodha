const User=require("../model/UserSchema.js");


module.exports.renderloginfail=(req , res)=>{
    res.status(401).send("login failed! please try again enter correct credentials");
    };


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
            
            res.send("registration failed! please try again : A user with the given username is already registered");
        }
        }


        module.exports.login = async (req, res, next) => {
            try {
                if (!req.user) {
                    return res.status(401).send("No user found");
                }

                const user = req.user;

                if (user.ifMfaActive) {
                    return res.json({ mfaRequired: true });
                }

                // Use Promise-based approach to work with wrapAsync
                await new Promise((resolve, reject) => {
                    req.login(user, (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            req.session.save((err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve();
                                }
                            });
                        }
                    });
                });

                console.log("login successfull! welcome-back to Zerodha");
                console.log(req.user);
                res.send("login successfull! welcome-back to Zerodha");
            } catch (error) {
                next(error);
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
    res.send(req.user);
    console.log(req.user) 
}
else{
    res.send(req.user);
    console.log("user not logged in" ,req.user) 
}

        }