const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const HoldingsSchema=new Schema({
Name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
Quantity:{
    type:Number,
    required:true
},
Average:{
type:String,
required:true
},

Net:{
    type:String,
    required:true
},
Day:{
    type:String,
    required:true
}

});



const Holding=mongoose.model("Holding",HoldingsSchema);
module.exports=Holding;
