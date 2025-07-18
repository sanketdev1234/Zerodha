const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const passwordValidator = require('../Utilities/PasswordValidator');

const UserSchema = new Schema({
    virtualBalance: {
        type: Number,
        default: 100000, // or any starting amount you want
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    ifMfaActive:{
        type:Boolean,
        default:false,
    },
    twoFactorSecret:{
        type:String, // this is the secret key for the two factor authentication and it is used to generate the QR code for the two factor authentication andi is is used when mfa is active
    },    
}, { timestamps: true });

UserSchema.plugin(passportLocalMongoose, {
    passwordValidator
});


module.exports=mongoose.model("User" , UserSchema);
