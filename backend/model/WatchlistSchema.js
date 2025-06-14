const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const WatchlistSchema=new Schema({
name:{
    type:String,
    required:true
},
price:{
    type:Number,
    required:true
},
percent:{
    type:String,
    required:true
},
isDown:{
    type:Boolean,
    required:true
}

});



const Watchlist=mongoose.model("Watchlist",WatchlistSchema);
module.exports=Watchlist;
