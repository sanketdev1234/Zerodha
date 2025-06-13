if(process.env.NODE_ENV!="production"){
require("dotenv").config();
}
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
var methodOverride = require('method-override'); 
app.use(methodOverride('_method'));

const port=8080;
const dburl=process.env.ATLAS_DBURL;


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

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

