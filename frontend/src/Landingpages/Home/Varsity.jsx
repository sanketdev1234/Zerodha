function Varsity(){
 return (
    <div className="container mt-5">
        <div className="row  d-flex justify-content-between align-items-center ">
            <div className="col-md-6 mb-5 mb-md-0">
        <img
            src="../src/assets/education.svg"
            alt="Education illustration"
            className="img-fluid"
          />
            </div>
<div className="col-md-6 d-flex flex-column justify-content-between align-items-start gap-4">
  <h3 className="fs-1">Free and open market education</h3>
  <h4 className="fw-normal">
    Varsity, the largest online stock market education book in the world covering
    everything from the basics to advanced trading.
  </h4>

  <a href="" className="fw-medium"  style={{ textDecoration: "none" }}>
    Varsity
    <i className="fa-solid fa-arrow-right ms-2"></i>
  </a>

  <h4 className="fw-normal">
    TradingQ&A, the most active trading and investment community in India for all
    your market related queries.
  </h4>

  <a href="" className="fw-medium"  style={{ textDecoration: "none" }}>
    Trading Q&A
    <i className="fa-solid fa-arrow-right ms-2"></i>
  </a>

</div>

        </div>
    </div>
    );
}
export default Varsity;