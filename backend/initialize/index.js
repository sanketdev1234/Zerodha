require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const mongoose=require("mongoose");

const Holding=require("../model/HoldingsSchema.js");
const Position=require("../model/PositionSchema.js");
const Ordering=require("../model/OrdersSchema.js");
const Watchlist=require("../model/WatchlistSchema.js");
const Tutorial=require("../model/Tutorials.js");
const Quiz=require("../model/Quiz.js")

const samplePositions =require("../initialize/data.js").samplePositions;
const sampleHoldings =require("../initialize/data.js").sampleHoldings;
const sampleOrders =require("../initialize/data.js").sampleOrders;
const sampleWatchlist =require("../initialize/data.js").sampleWatchlist;
const SampleTutorials=require("./data.js").SampleTutorials;
const SampleQuiz=require("./data.js").SampleQuiz;

console.log(sampleHoldings)
console.log(sampleOrders)
console.log(samplePositions)
console.log(sampleWatchlist)

const dburl=process.env.ATLAS_DBURL;
console.log(dburl)
main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

  // connect to localhost
// async function main() {
//   await mongoose.connect("mongodb://localhost:27017/Zerodha");
// }


//connect to atlas
async function main() {
  await mongoose.connect(dburl);
}


async function initialize_data_Holding(){
    await Holding.deleteMany({});
    await Holding.insertMany(sampleHoldings); 
};

// initialize_data_Holding()

async function initialize_data_Position(){
    await Position.deleteMany({});
    await Position.insertMany(samplePositions); 
};

// initialize_data_Position()

async function initialize_data_Orders(){
    await Ordering.deleteMany({});
    await Ordering.insertMany(sampleOrders); 
};

// initialize_data_Orders()

async function initialize_data_Watchlist(){
    await Watchlist.deleteMany({});
    await Watchlist.insertMany(sampleWatchlist); 
};

// initialize_data_Watchlist();

async function initialize_data_tutorial(){
  await Tutorial.deleteMany({});
  await Tutorial.insertMany(SampleTutorials); 
};

initialize_data_tutorial();

async function initialize_data_quiz(){
  await Quiz.deleteMany({});
  await Quiz.insertMany(SampleQuiz); 
};

initialize_data_quiz();
