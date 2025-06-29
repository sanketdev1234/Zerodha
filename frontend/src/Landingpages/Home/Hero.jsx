import {Link} from 'react-router-dom';
import homeHero from '../../assets/homeHero.png';
function Hero() {
  return (
    <div className="container-fluid py-5" style={{ 
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center"
    }}>
      <div className="container">
        <div className="row d-flex flex-column">
          <div className="col-md-8 offset-md-2 mb-5">
            <img
              src={homeHero}
              alt="Hero illustration of investment"
              className="img-fluid"
            />
          </div>

          <div className="col-md d-flex flex-column justify-content-center align-items-center text-center">
            <h1 className="mb-4 text-white fw-bold" style={{ fontSize: "3.5rem", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
              Secure, Real-Time Trading Simulator
            </h1>
            <h3 className="text-white-50 mb-4 fw-light" style={{ fontSize: "1.5rem" }}>
              Advanced trading platform simulator with virtual portfolio management, 
              interactive charts, and risk-free learning environment.
            </h3>
           <Link to='/signup'> <button type="button" className="btn btn-light btn-lg mt-4 px-5 py-3 fw-bold" 
                    style={{ 
                      fontSize: "1.2rem",
                      borderRadius: "50px",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                      transition: "all 0.3s ease"
                    }}>
              Start Trading Simulation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

