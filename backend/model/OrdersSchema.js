const mongoose=require("mongoose");
const user=require("./UserSchema")
const Schema=mongoose.Schema;

const OrderingSchema=new Schema({
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
Mode:{
type:String,
required:true
},
Owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
}
});



const Ordering=mongoose.model("Ordering",OrderingSchema);
module.exports=Ordering;
