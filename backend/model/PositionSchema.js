const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const PositionsSchema=new Schema({
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
},

Product:{
    type:String,
    required:true
},

isLoss:{
    type:Boolean,
    required:true
},

});



const Position=mongoose.model("Position",PositionsSchema);
module.exports=Position;
