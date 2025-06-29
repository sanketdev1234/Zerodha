if(process.env.NODE_ENV!="production"){
require("dotenv").config();
}
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const session = require("express-session");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
const methodOverride = require('method-override'); 
app.use(methodOverride('_method'));

const ExpressError = require("./Utilities/ExpressError.js");
const asyncWrap = require("./Utilities/AsyncWrap.js");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const localstrategy = require("passport-local");

const cors = require('cors')

app.use(cookieParser());



const dburl=process.env.ATLAS_DBURL;



const Holding=require("./model/HoldingsSchema.js");
const Position=require("./model/PositionSchema.js");
const Ordering=require("./model/OrdersSchema.js");
const Watchlist=require("./model/WatchlistSchema.js");
const Buy=require("./model/BuySchema.js");
const Sell=require("./model/SellSchema.js");
const User=require("./model/UserSchema.js");
const AuthRoutes=require("./routes/AuthRoute.js");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Updated CORS configuration for production - ALLOWING ALL ORIGINS TEMPORARILY
const corsoption={
  origin: true, // Allow all origins temporarily
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  exposedHeaders: ["Set-Cookie"]
};
app.use(cors(corsoption));

const store= MongoStore.create({
  // mongoUrl:"mongodb://localhost:27017/Zerodha",  //  if we use dburl for mongosb database then mongoUrl will be=dburl
  mongoUrl:dburl,
  crypto:{
    secret:process.env.SECRET,
  },
touchAfter:24*3600,
});

   const sessionoption={secret:process.env.SECRET, resave:false , saveUninitialized:true,
  store:store,
  cookie:{
    httpOnly:true,
    expires:Date.now() + 1000*60*60*7*24,
    maxAge:1000*60*60*7*24
  }
};
store.on("error" , ()=>{
  console.log("this error occur in mongo ",error);
}); 

app.use(session(sessionoption));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localstrategy(User.authenticate()));//here the authentication is done based on the username and password which is stored in the database
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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


app.use((req,res,next)=>{
  res.locals.currentUser=req.user;
  next();
})

app.get("/",async(req,res)=>{
  res.send("Hi this is root folder")
})


app.get("/getholding",asyncWrap(async(req,res)=>{
const holding=await Holding.find();
  res.send({holding});
}));
app.get("/getorder",asyncWrap(async(req,res)=>{
const order=await Ordering.find();
  res.send({order});
}));
app.get("/getposition",asyncWrap(async(req,res)=>{
const position=await Position.find();
  res.send({position });
}));
app.get("/getwatchlist",asyncWrap(async(req,res)=>{
const watchlist=await Watchlist.find();
  res.send({watchlist});
}));

app.delete("/deletewatchlist/:id",asyncWrap(async(req,res)=>{
  const id=req.params.id;
  const deleted_watchlist=await Watchlist.findByIdAndDelete(id);
  console.log(deleted_watchlist)
  res.send(deleted_watchlist);
}));

app.post("/addbuy",asyncWrap(async(req,res)=>{
  const qty=req.body.Quantity;
  const ppq=req.body.PricePerQuantity;
  const tp=req.body.TotalPrice;
  const company=req.body.Company;
  const newbuy= new Buy({Quantity:qty,PricePerQuantity:ppq,TotalPrice:tp,Company:company});
  await newbuy.save();
  res.send(`added new buy stock ${newbuy}`);
}));

app.post("/addsell",asyncWrap(async(req,res)=>{
  const qty=req.body.Quantity;
  const ppq=req.body.PricePerQuantity;
  const tp=req.body.TotalPrice;
  const margin=req.body.Margin;
  const company=req.body.Company;
  const newsell= new Sell({Quantity:qty,PricePerQuantity:ppq,TotalPrice:tp,Margin:margin,Company:company});
  await newsell.save();
  res.send(`added new sell stock ${newsell}`);
}));

app.get("/getbuy",asyncWrap(async(req,res)=>{
  const buy=await Buy.find();
    res.send({buy});
  }));
  
  app.get("/getsell",asyncWrap(async(req,res)=>{
    const sell=await Sell.find();
      res.send({sell});
    }));


    app.use("/auth",AuthRoutes);
    app.use("/mfa",AuthRoutes);
    app.all("*" , (req , res , next)=>{
      next(new ExpressError (404 , "page not found!"));
    });
    
    // it is for the express error
    app.use((err , req, res ,next )=>{
    let {statusCode=500 , message="something went wrong!"}=err;
    console.log(`our error status code is ${statusCode} and message is ${message}`)
    // res.status(statusCode).send(message);
    res.status(statusCode).send(message);
    })
    
    