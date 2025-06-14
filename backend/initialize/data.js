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

module.exports={sampleHoldings , sampleOrders,samplePositions};