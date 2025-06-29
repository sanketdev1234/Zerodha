import education from '../../assets/education.svg';

function Varsity(){
 return (
    <div className="container-fluid py-5" style={{ 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white"
    }}>
        <div className="container">
            <div className="row d-flex justify-content-between align-items-center">
                <div className="col-md-6 mb-5 mb-md-0">
            <img
                src={education}
                alt="Education illustration"
                className="img-fluid"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
                </div>
    <div className="col-md-6 d-flex flex-column justify-content-between align-items-start gap-4">
      <h3 className="fs-1 text-white fw-bold">Free and comprehensive trading education</h3>
      <h4 className="fw-normal text-white-75">
        S-Exchange Academy, the most comprehensive online trading education platform covering
        everything from the basics to advanced trading strategies and risk management.
      </h4>

      <a href="" className="fw-bold text-warning" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
        S-Exchange Academy
        <i className="fa-solid fa-arrow-right ms-2"></i>
      </a>

      <h4 className="fw-normal text-white-75">
        Trading Community, the most active trading and investment community for all
        your market related queries and strategy discussions.
      </h4>

      <a href="" className="fw-bold text-info" style={{ textDecoration: "none", fontSize: "1.1rem" }}>
        Trading Community
        <i className="fa-solid fa-arrow-right ms-2"></i>
      </a>

    </div>

            </div>
        </div>
    </div>
    );
}
export default Varsity;