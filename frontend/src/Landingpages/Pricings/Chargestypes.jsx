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
          <p className="fw-medium fs-2">Free trading simulation</p> 
          <p>All trading simulation features are absolutely free — ₹ 0 charges for learning and practice.</p>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
      <img
            src="./src/assets/intradayTrades.svg"
            alt="price"
            className="img-fluid" style={{maxWidth:"300px"}}
          />
          <p className="fw-medium fs-2">Advanced features</p> 
          <p>Access to advanced charting tools, technical indicators, and strategy building features at no cost.</p>
                </div>
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <img
            src="./src/assets/pricingMF.svg"
            alt="price"
            className="img-fluid"  style={{maxWidth:"300px"}}
          />
          <p className="fw-medium fs-2">Free education</p> 
          <p>All educational content, tutorials, and learning modules are absolutely free — ₹ 0 charges.</p>
                </div>
            </div>
        </div>
    )
}
export default Chargetypes;