if(process.env.NODE_ENV!="production"){
require("dotenv").config();
}
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
// app.set('trust proxy', 1);
const mongoose = require("mongoose");

const methodOverride = require('method-override'); 
app.use(methodOverride('_method'));

const ExpressError = require("./Utilities/ExpressError.js");
const asyncWrap = require("./Utilities/AsyncWrap.js");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const localstrategy = require("passport-local");

const cors = require('cors');
const { isloggedin } = require("./middleware/authmiddleware.js");

app.use(cookieParser());

const corsoption = {
  origin: [
    // "https://s-exchange-frontend.onrender.com",
    "http://localhost:3000",
    "http://localhost:3001",
    // "https://s-exchange-dashboard.onrender.com"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsoption));

const port=process.env.PORT || 8080;
const dburl=process.env.ATLAS_DBURL;

const Holding=require("./model/HoldingsSchema.js");
const Position=require("./model/PositionSchema.js");
const Ordering=require("./model/OrdersSchema.js");
const Watchlist=require("./model/WatchlistSchema.js");
const Buy=require("./model/BuySchema.js");
const Sell=require("./model/SellSchema.js");
const Tutorial=require("./model/Tutorials.js");
const Quiz=require("./model/Quiz.js");
const User=require("./model/UserSchema.js");
const AuthRoutes=require("./routes/AuthRoute.js");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

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
  cookie: {
    httpOnly: true,
    secure: false, // MUST be true for production with HTTPS
    sameSite: 'lax', // MUST be 'none' for cross-domain cookies
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    // // DO NOT set the domain attribute. Let the browser handle it.
    //   domain: '.onrender.com',
  },
};
store.on("error" , (error)=>{
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
const order=await Ordering.find({Owner:req.user._id});
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

app.post("/addbuy", isloggedin, asyncWrap(async(req,res)=>{
  const qty=req.body.Quantity;
  const ppq=req.body.PricePerQuantity;
  const tp=req.body.TotalPrice;
  const company=req.body.Company;
  const currentUser=await User.findById(req.user._id);
  if(currentUser.virtualBalance < tp){
  return res.send("not enough balance");
  }
  const newbuy= new Buy({Quantity:qty,PricePerQuantity:ppq,TotalPrice:tp,Company:company, Owner: req.user._id});
  await newbuy.save();
  const newOrder = new Ordering({
    Name: company,
    price: ppq,
    Quantity: qty,
    Mode: "BUY",
    Owner: req.user._id
  });
  await newOrder.save();
  currentUser.virtualBalance=currentUser.virtualBalance-tp;
  await currentUser.save();
  res.send(`added new buy stock ${newbuy}`);
}));

app.post("/addsell", isloggedin, asyncWrap(async(req, res) => {
  const qty = req.body.Quantity;
  const ppq = req.body.PricePerQuantity;
  const tp = req.body.TotalPrice;
  const margin = req.body.Margin;
  const company = req.body.Company;

  // 1. Find total quantity bought for this company by this user
  const totalBought = await Buy.aggregate([
    { $match: { Owner: req.user._id, Company: company } },
    { $group: { _id: null, total: { $sum: "$Quantity" } } }
  ]);
  const boughtQty = totalBought.length > 0 ? totalBought[0].total : 0;


  if (boughtQty < qty) {
    return res.send( "Not enough quantity to sell. " );
  }

  // 4. Reduce quantity from Buy records (FIFO)
  let qtyToReduce = qty;
  const userBuys = await Buy.find({ Owner: req.user._id, Company: company, Quantity: { $gt: 0 } }).sort({ _id: 1 });

  for (let buy of userBuys) {
    if (qtyToReduce <= 0) break;
    if (buy.Quantity <= qtyToReduce) {
      qtyToReduce -= buy.Quantity;
      buy.Quantity = 0;
    } else {
      buy.Quantity -= qtyToReduce;
      qtyToReduce = 0;
    }
    await buy.save();
  }

  // 5. Proceed with sell
  const newsell = new Sell({
    Quantity: qty,
    PricePerQuantity: ppq,
    TotalPrice: tp,
    Margin: margin,
    Company: company,
    Owner: req.user._id
  });
  await newsell.save();

  // 6. Add to Orders
  const newOrder = new Ordering({
    Name: company,
    price: ppq,
    Quantity: qty,
    Mode: "SELL",
    Owner: req.user._id
  });
  await newOrder.save();

  const currentUser=await User.findById(req.user._id);
  currentUser.virtualBalance=currentUser.virtualBalance+tp;
  await currentUser.save();

  res.send(`added new sell stock ${newsell}`);
}));

app.get("/getbuy", isloggedin, asyncWrap(async(req,res)=>{
  const buy=await Buy.find({ Owner: req.user._id });
  res.send({buy});
}));
  
  app.get("/getsell", isloggedin, asyncWrap(async(req,res)=>{
    const sell=await Sell.find({ Owner: req.user._id });
      res.send({sell});
    }));

    app.get("/getbalance", isloggedin, asyncWrap(async(req, res) => {
      const user = await User.findById(req.user._id);
      res.send(`Remaining balance :  ${user.virtualBalance}`);
    }));


app.get("/tutorials", async (req, res) => {
  const tutorials = await Tutorial.find();
  res.json(tutorials);
});

app.get("/tutorials/:id", async (req, res) => {
  const tutorial = await Tutorial.findById(req.params.id);
  res.send(tutorial);
});

app.get("/quizzes", async (req, res) => {
  const quizzes = await Quiz.find();
  res.send(quizzes);
});

app.get("/quizzes/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.send("Quiz not found" );
    }
    res.send(quiz);
  } catch (err) {
    res.send(err);
  }
});

const axios = require('axios');

app.post('/api/advisor/chat', isloggedin, async (req, res) => {
  const  question  = req.body.question;
  try {
    const geminiRes = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        contents: [{ parts: [{ text: question }] }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': process.env.GEMINI_API_KEY
        }
      }
    );
    
    const answer = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not answer that.';
    res.send(answer);
  } catch (err) {
    res.send( err );
  }
});


app.get('/api/advisor/gemini-suggestions', isloggedin, async (req, res) => {
  const buys = await Buy.find({ Owner: req.user._id });
  const sells = await Sell.find({ Owner: req.user._id });
  const orders = await Ordering.find({ Owner: req.user._id });
  const watchlist = await Watchlist.find({});

  const prompt = `
You are an expert trading advisor. Analyze the following user's portfolio and suggest what they should buy, sell, or hold. Be specific and explain your reasoning.

Buys: ${JSON.stringify(buys)}
Sells: ${JSON.stringify(sells)}
Orders: ${JSON.stringify(orders)}
Watchlist: ${JSON.stringify(watchlist)}

Give actionable advice for this user.
`;

  try {
    const geminiRes = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        contents: [{ parts: [{ text: prompt }] }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': process.env.GEMINI_API_KEY
        }
      }
    );
    const suggestion = geminiRes.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate suggestions.';
    
    res.send( suggestion );
  } catch (err) {
    res.send( err );
  }
});

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
    
    
