const express=require("express");
const router=express.Router({mergeParams:true});
const authController=require("../controller/AuthController.js");
const passport=require("passport");
const saveredirecturl=require("../middleware/authmiddleware.js").saveredirecturl;
const wrapAsync=require("../Utilities/AsyncWrap.js");
const MfaController=require("../controller/MfaController.js");
const middlewarefor2fs=require("../middleware/authmiddleware.js").middlewarefor2fs;

router.get("/loginfail",authController.renderloginfail);
// router.get("/loginform",authController.renderLoginForm);
router.post("/register",authController.register);

router.post("/login" , saveredirecturl,passport.authenticate("local" , {
    failureRedirect:"/auth/loginfail", 
    }) , wrapAsync(authController.login)); 

router.get("/logout",authController.logout);

router.get("/authstatus",authController.authstatus);

router.post("/setup2fa",middlewarefor2fs,MfaController.setup2fa);
router.post("/verify2fa",middlewarefor2fs,MfaController.verify2fa);
router.post("/reset2fa",middlewarefor2fs,MfaController.reset2fa);


module.exports=router;


