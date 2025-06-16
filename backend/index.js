if(process.env.NODE_ENV!="production"){
require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
var methodOverride = require('method-override'); 
app.use(methodOverride('_method'));

const cors = require('cors')
const port=8080;
const dburl=process.env.ATLAS_DBURL;


const Holding=require("./model/HoldingsSchema.js");
const Position=require("./model/PositionSchema.js");
const Ordering=require("./model/OrdersSchema.js");
const Watchlist=require("./model/WatchlistSchema.js");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(cors());

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

//   // connecting the mongo db with the localhost
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/Zerodha");
// }


// // connecting the mongo database with the mongoatlas cloud servive
async function main() {
  await mongoose.connect(dburl);
}

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
});

app.get("/",async(req,res)=>{
  res.send("Hi this is root folder")
})

app.get("/getholding",async(req,res)=>{
const holding=await Holding.find();
  res.send({holding});
})
app.get("/getorder",async(req,res)=>{
const order=await Ordering.find();
  res.send({order});
})
app.get("/getposition",async(req,res)=>{
const position=await Position.find();
  res.send({position });
})
app.get("/getwatchlist",async(req,res)=>{
const watchlist=await Watchlist.find();
  res.send({watchlist});
});

app.delete("/deletewatchlist/:id",async(req,res)=>{
  const id=req.params.id;
  const deleted_watchlist=await Watchlist.findByIdAndDelete(id);
  console.log(deleted_watchlist)
  res.send(deleted_watchlist);
});
