const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const SellSchema=new Schema({
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
Margin:{
    type:Number,
    require:true,
}
});



const Sell=mongoose.model("Sell",SellSchema);
module.exports=Sell;
