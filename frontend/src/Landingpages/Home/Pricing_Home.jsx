function Pricing_Home(){
    return (
    <div className="container-fluid py-5" style={{ 
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white"
    }}>
        <div className="container">
            <div className="row row-cols-10 d-flex justify-content-between align-items-center">
                <div className="col-md-5">
                <h2 className="mb-1 text-white fw-bold" style={{ fontSize: "2.5rem" }}>Transparent simulator pricing</h2>
                <br></br>
                <br></br>
    <h4 className="fw-normal text-white-75">We pioneered the concept of free trading simulation and educational transparency. Free access and no hidden charges for learning.</h4>
                </div>

                <div className="col-md-5">
                    <div className="row">
                <div className="col">
              <img
                src="../src/assets/pricingMF.svg"
                alt="Hero illustration of investment"
                className="img-fluid"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
                </div>
                <div className="col">
              <img
                src="../src/assets/pricingMF.svg"
                alt="Hero illustration of investment"
                className="img-fluid"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
                </div>
                <div className="col">
              <img
                src="../src/assets/intradayTrades.svg"
                alt="Hero illustration of investment"
                className="img-fluid"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Pricing_Home;