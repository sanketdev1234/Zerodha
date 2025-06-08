function Chargetypes(){
    return (
        <div className="container mt-5 py-5">
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            src="./src/assets/pricingMF.svg"
            alt="price"
            className="img-fluid"  style={{maxWidth:"300px"}}
          />
          <p className="fw-medium fs-2">Free equity delivery</p> 
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
      <img
            src="./src/assets/intradayTrades.svg"
            alt="price"
            className="img-fluid" style={{maxWidth:"300px"}}
          />
          <p className="fw-medium fs-2">Intraday and F&O trades</p> 
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            src="./src/assets/pricingMF.svg"
            alt="price"
            className="img-fluid"  style={{maxWidth:"300px"}}
          />
          <p className="fw-medium fs-2">Free direct MF</p> 
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}
export default Chargetypes;