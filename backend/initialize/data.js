 const samplePositions = [
  {
    Name: "INFY",
    price: 1450.50,
    Quantity: 10,
    Average: "1400.00",
    Net: "+505.00",
    Day: "+50.00",
    Product: "CNC",
    isLoss: false,
  },
  {
    Name: "TCS",
    price: 3230.75,
    Quantity: 5,
    Average: "3300.00",
    Net: "-345.00",
    Day: "-70.00",
    Product: "MIS",
    isLoss: true,
  },
  {
    Name: "RELIANCE",
    price: 2745.20,
    Quantity: 12,
    Average: "2700.00",
    Net: "+540.00",
    Day: "+90.00",
    Product: "CNC",
    isLoss: false,
  },
  {
    Name: "HDFC",
    price: 1675.00,
    Quantity: 20,
    Average: "1700.00",
    Net: "-500.00",
    Day: "-50.00",
    Product: "MIS",
    isLoss: true,
  },
  {
    Name: "ITC",
    price: 445.60,
    Quantity: 100,
    Average: "440.00",
    Net: "+560.00",
    Day: "+30.00",
    Product: "CNC",
    isLoss: false,
  },
  {
    Name: "SBIN",
    price: 675.45,
    Quantity: 50,
    Average: "680.00",
    Net: "-227.50",
    Day: "-25.00",
    Product: "MIS",
    isLoss: true,
  },
  {
    Name: "HINDUNILVR",
    price: 2560.00,
    Quantity: 8,
    Average: "2550.00",
    Net: "+80.00",
    Day: "+10.00",
    Product: "CNC",
    isLoss: false,
  },
  {
    Name: "BAJAJFINSV",
    price: 15800.00,
    Quantity: 1,
    Average: "16000.00",
    Net: "-200.00",
    Day: "-150.00",
    Product: "MIS",
    isLoss: true,
  },
  {
    Name: "ADANIENT",
    price: 3100.25,
    Quantity: 3,
    Average: "3080.00",
    Net: "+60.75",
    Day: "+25.00",
    Product: "CNC",
    isLoss: false,
  },
  {
    Name: "ONGC",
    price: 190.50,
    Quantity: 150,
    Average: "195.00",
    Net: "-675.00",
    Day: "-50.00",
    Product: "MIS",
    isLoss: true,
  }
];

 const sampleOrders = [
  {
    Name: "INFY",
    price: 1452.35,
    Quantity: 15,
    Mode: "BUY"
  },
  {
    Name: "TCS",
    price: 3200.00,
    Quantity: 8,
    Mode: "SELL"
  },
  {
    Name: "RELIANCE",
    price: 2750.10,
    Quantity: 20,
    Mode: "BUY"
  },
  {
    Name: "HDFC",
    price: 1685.50,
    Quantity: 10,
    Mode: "SELL"
  },
  {
    Name: "ITC",
    price: 446.75,
    Quantity: 100,
    Mode: "BUY"
  },
  {
    Name: "SBIN",
    price: 670.20,
    Quantity: 40,
    Mode: "BUY"
  },
  {
    Name: "HINDUNILVR",
    price: 2570.00,
    Quantity: 5,
    Mode: "SELL"
  },
  {
    Name: "BAJAJFINSV",
    price: 15900.00,
    Quantity: 1,
    Mode: "BUY"
  },
  {
    Name: "ADANIENT",
    price: 3090.50,
    Quantity: 6,
    Mode: "SELL"
  },
  {
    Name: "ONGC",
    price: 192.30,
    Quantity: 120,
    Mode: "BUY"
  }
];

 const sampleHoldings = [
  {
    Name: "INFY",
    price: 1460.25,
    Quantity: 10,
    Average: "1445.00",
    Net: "+152.50",
    Day: "+25.00"
  },
  {
    Name: "TCS",
    price: 3255.75,
    Quantity: 6,
    Average: "3300.00",
    Net: "-266.50",
    Day: "-45.00"
  },
  {
    Name: "RELIANCE",
    price: 2780.10,
    Quantity: 12,
    Average: "2760.00",
    Net: "+241.20",
    Day: "+30.00"
  },
  {
    Name: "HDFC",
    price: 1690.50,
    Quantity: 15,
    Average: "1705.00",
    Net: "-217.50",
    Day: "-22.50"
  },
  {
    Name: "ITC",
    price: 448.80,
    Quantity: 90,
    Average: "440.00",
    Net: "+792.00",
    Day: "+36.00"
  },
  {
    Name: "SBIN",
    price: 678.45,
    Quantity: 50,
    Average: "680.00",
    Net: "-77.50",
    Day: "-15.00"
  },
  {
    Name: "HINDUNILVR",
    price: 2585.00,
    Quantity: 5,
    Average: "2570.00",
    Net: "+75.00",
    Day: "+10.00"
  },
  {
    Name: "BAJAJFINSV",
    price: 15890.00,
    Quantity: 1,
    Average: "15900.00",
    Net: "-10.00",
    Day: "-10.00"
  },
  {
    Name: "ADANIENT",
    price: 3110.20,
    Quantity: 3,
    Average: "3100.00",
    Net: "+30.60",
    Day: "+10.00"
  },
  {
    Name: "ONGC",
    price: 189.60,
    Quantity: 100,
    Average: "195.00",
    Net: "-540.00",
    Day: "-35.00"
  }
];

const sampleWatchlist = [
  {
    name: "INFY",
    price: 1555.45,
    percent: "-1.60%",
    isDown: true,
  },
  {
    name: "ONGC",
    price: 116.8,
    percent: "-0.09%",
    isDown: true,
  },
  {
    name: "TCS",
    price: 3194.8,
    percent: "-0.25%",
    isDown: true,
  },
  {
    name: "KPITTECH",
    price: 266.45,
    percent: "3.54%",
    isDown: false,
  },
  {
    name: "QUICKHEAL",
    price: 308.55,
    percent: "-0.15%",
    isDown: true,
  },
  {
    name: "WIPRO",
    price: 577.75,
    percent: "0.32%",
    isDown: false,
  },
  {
    name: "M&M",
    price: 779.8,
    percent: "-0.01%",
    isDown: true,
  },
  {
    name: "RELIANCE",
    price: 2112.4,
    percent: "1.44%",
    isDown: false,
  },
  {
    name: "HUL",
    price: 512.4,
    percent: "1.04%",
    isDown: false,
  },
    { name: "ICICIBANK", price: 925.3, percent: "-0.21%", isDown: true },
  { name: "SBIN", price: 596.9, percent: "0.85%", isDown: false },
  { name: "AXISBANK", price: 995.2, percent: "-0.40%", isDown: true },
  { name: "TATAMOTORS", price: 785.6, percent: "0.72%", isDown: false },
  { name: "MARUTI", price: 9500.0, percent: "1.15%", isDown: false },
  { name: "BAJAJ-AUTO", price: 4785.3, percent: "-0.18%", isDown: true },
  { name: "LT", price: 3462.0, percent: "0.45%", isDown: false },
  { name: "TECHM", price: 1315.4, percent: "-1.23%", isDown: true },
  { name: "HCLTECH", price: 1222.8, percent: "0.92%", isDown: false },
  { name: "ADANIENT", price: 2390.5, percent: "1.88%", isDown: false },
  { name: "ADANIPORTS", price: 1233.7, percent: "-0.56%", isDown: true },
  { name: "COALINDIA", price: 432.6, percent: "0.20%", isDown: false },
  { name: "NTPC", price: 314.1, percent: "-0.12%", isDown: true },
  { name: "POWERGRID", price: 285.7, percent: "0.63%", isDown: false },
  { name: "BPCL", price: 465.2, percent: "-0.90%", isDown: true },
  { name: "IOC", price: 127.3, percent: "1.34%", isDown: false },
  { name: "ONGC2", price: 119.6, percent: "0.14%", isDown: false },
  { name: "ZOMATO", price: 152.2, percent: "-1.48%", isDown: true },
  { name: "PAYTM", price: 415.9, percent: "-0.31%", isDown: true },
  { name: "POLYCAB", price: 5678.2, percent: "2.12%", isDown: false },
  { name: "DMART", price: 3701.6, percent: "-1.09%", isDown: true },
  { name: "ASIANPAINT", price: 2890.1, percent: "0.45%", isDown: false },
  { name: "BERGEPAINT", price: 621.9, percent: "-0.78%", isDown: true },
  { name: "PIDILITIND", price: 2741.0, percent: "1.09%", isDown: false },
  { name: "ULTRACEMCO", price: 8932.6, percent: "-0.33%", isDown: true },
  { name: "JSWSTEEL", price: 832.4, percent: "1.75%", isDown: false },
  { name: "TATASTEEL", price: 162.9, percent: "-0.21%", isDown: true },
  { name: "HINDALCO", price: 488.3, percent: "0.92%", isDown: false },
  { name: "VEDL", price: 305.7, percent: "1.26%", isDown: false },
  { name: "BEL", price: 245.8, percent: "-0.41%", isDown: true },
  { name: "BHEL", price: 130.6, percent: "0.89%", isDown: false },
  { name: "IRCTC", price: 967.4, percent: "-1.04%", isDown: true },
  { name: "NAVINFLUOR", price: 4223.1, percent: "0.60%", isDown: false },
  { name: "DEEPAKNTR", price: 1940.2, percent: "-0.73%", isDown: true },
  { name: "PERSISTENT", price: 4270.3, percent: "1.47%", isDown: false },
  { name: "MPHASIS", price: 2560.8, percent: "-0.65%", isDown: true },
  { name: "LTTS", price: 4560.5, percent: "0.93%", isDown: false },
  { name: "MINDTREE", price: 3199.9, percent: "-1.32%", isDown: true },
  { name: "NIIT", price: 133.3, percent: "1.23%", isDown: false },
  { name: "KPIT", price: 689.7, percent: "-0.91%", isDown: true },
  { name: "ROUTE", price: 1015.6, percent: "0.22%", isDown: false },
  { name: "TANLA", price: 1180.2, percent: "-0.77%", isDown: true },
  { name: "SONACOMS", price: 505.4, percent: "1.41%", isDown: false },
  { name: "TATACOMM", price: 1550.8, percent: "-0.30%", isDown: true },
  { name: "INDUSINDBK", price: 1432.1, percent: "0.54%", isDown: false },
  { name: "IDFCFIRSTB", price: 92.7, percent: "-1.12%", isDown: true },
  { name: "YESBANK", price: 17.3, percent: "0.11%", isDown: false },
  { name: "BANKBARODA", price: 252.9, percent: "-0.44%", isDown: true },
];

const SampleTutorials=[{
  "title": "What is a Stock?",
  "content": "A stock (also known as equity) represents ownership in a corporation. When you buy a company's stock, you become a shareholder and own a portion of that company. Stocks are issued by companies to raise capital, and shareholders may benefit through dividends or by selling their shares when the price increases.",

}
,{
  "title": "Bull vs Bear Markets",
  "content": "A bull market refers to a market condition where prices are rising or expected to rise. It's characterized by investor optimism. A bear market is the opposite - when prices are falling or expected to fall, accompanied by widespread pessimism. Bull markets typically last longer than bear markets.",

},{
  "title": "Market Orders vs Limit Orders",
  "content": "A market order is an instruction to buy or sell a stock immediately at the best available current price. A limit order sets a specific price at which you're willing to buy or sell. Market orders guarantee execution but not price, while limit orders guarantee price but not execution.",

},{
  "title": "What is Diversification?",
  "content": "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio. The idea is that a portfolio of different kinds of investments will, on average, yield higher returns and pose lower risk than any individual investment. This includes spreading investments across different industries, asset classes, and geographies.",

},{
  "title": "Understanding P/E Ratio",
  "content": "The price-to-earnings (P/E) ratio compares a company's stock price to its earnings per share. It's calculated as: P/E Ratio = Market Value per Share / Earnings per Share. A high P/E could mean a stock is overvalued, or investors expect high growth. A low P/E might indicate undervaluation or potential problems.",

}];

const SampleQuiz=[{
  "question": "What does owning a stock represent?",
  "options": [
    "A loan to the company",
    "Ownership in the company",
    "A government bond",
    "A type of insurance"
  ],
  "correctIndex": 1,
  "explanation": "Owning a stock means you own a portion (share) of the company."
},{
  "question": "What characterizes a bull market?",
  "options": [
    "Falling prices and investor pessimism",
    "Rising prices and investor optimism",
    "Stagnant prices with no clear direction",
    "High volatility with no trend"
  ],
  "correctIndex": 1,
  "explanation": "Bull markets are periods of rising prices and positive investor sentiment."
},{
  "question": "What is the main advantage of a limit order?",
  "options": [
    "Guarantees immediate execution",
    "Guarantees the price you'll pay/receive",
    "Has lower brokerage fees",
    "Executes only after market hours"
  ],
  "correctIndex": 1,
  "explanation": "Limit orders let you control the price, though they may not execute if the market doesn't reach your price."
},{
  "question": "What is the primary benefit of diversification?",
  "options": [
    "Guarantees higher returns",
    "Reduces overall portfolio risk",
    "Eliminates all investment risk",
    "Focuses your investments in top performers"
  ],
  "correctIndex": 1,
  "explanation": "Diversification reduces risk by spreading investments across different assets."
},{
  "question": "What does a high P/E ratio typically indicate?",
  "options": [
    "The company is definitely overvalued",
    "Investors expect higher future growth",
    "The stock pays high dividends",
    "The company has no earnings"
  ],
  "correctIndex": 1,
  "explanation": "While high P/E can mean overvaluation, it often reflects investor expectations of strong future growth."
}];

module.exports={sampleHoldings , sampleOrders,samplePositions,sampleWatchlist,SampleTutorials,SampleQuiz};