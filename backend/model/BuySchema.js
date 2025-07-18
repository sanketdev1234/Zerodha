const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const user=require("./UserSchema");
const BuySchema=new Schema({
Quantity:{
    type:Number,
    required:true,
},
PricePerQuantity:{
    type:Number,
    required:true,
    min: 1,
},
TotalPrice:{
    type:Number,
    required:true
},
Company:{
    type:String,
    required:true
},
Owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
}
});



const Buy=mongoose.model("Buy",BuySchema);
module.exports=Buy;
