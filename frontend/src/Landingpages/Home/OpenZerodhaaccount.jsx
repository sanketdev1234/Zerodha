import {Link} from 'react-router-dom';
function OpenSExchangeAccount (){
return (
    <div className="container-fluid py-5" style={{ 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white"
    }}>
    <div className="container">
        <div className="row">
                <div className="col-md d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="mb-4 text-white fw-bold" style={{ fontSize: "3rem" }}>Open a S-Exchange Account</h1>
        <h4 className="text-white-75 mb-4" style={{ fontSize: "1.3rem" }}>
Advanced trading simulator with virtual portfolio management, interactive charts, and risk-free learning environment.
        </h4>
        <Link to='/signup'> 
        <button type="button" className="btn btn-light btn-lg mt-4 px-5 py-3 fw-bold" 
                style={{ 
                  fontSize: "1.2rem",
                  borderRadius: "50px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  transition: "all 0.3s ease"
                }}>
            Start Free Simulation
        </button>
        </Link>
        </div>
    </div>
    </div>
    </div>
    );
}
export default OpenSExchangeAccount;