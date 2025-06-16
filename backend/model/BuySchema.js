const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const BuySchema=new Schema({
Quantity:{
    type:Number,
    required:true,
    min: 1,
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

});



const Buy=mongoose.model("Buy",BuySchema);
module.exports=Buy;
