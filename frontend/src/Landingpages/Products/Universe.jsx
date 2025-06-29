import { Link } from 'react-router-dom';
import zerodhaFundhouse from '../../assets/zerodhaFundhouse.png';
import smallcaseLogo from '../../assets/smallcase-logo.png';
import sensibullLogo from '../../assets/sensibull-logo.svg';
import streakLogo from '../../assets/streak-logo.png';
import tijoriIcon from '../../assets/tijori.svg';
import dittoLogo from '../../assets/ditto-logo.png';

function Universe(){
    return (
        <div className="container-fluid py-5" style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white"
        }}>
            <div className="container">
                <div className="row">

                    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                        <p className="fs-1 fw-bold text-white">The S-Exchange Ecosystem</p>
                        <p className="fs-5 text-white-75">Extend your trading simulation and learning experience with our comprehensive platform features</p>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <div className='col-md-2'></div>
                            <div className="col-md-3 my-4 text-center">
                                <Link to="#" className="text-decoration-none text-center text-white">
                                    <img
                                        src={zerodhaFundhouse}
                                        alt="fundhouse"
                                        className="img-fluid" 
                                        style={{width:"200px", filter: "brightness(1.2) contrast(1.1)"}}
                                    />
                                </Link>
                                <p className="text-white-75">Advanced portfolio management tools that help you track and analyze your virtual investments with comprehensive reporting.</p>
                            </div>
                            <div className="col-md-3 my-4 text-center">
                                <Link to="#" className="text-decoration-none text-center text-white">
                                    <img
                                        src={smallcaseLogo}
                                        alt="fundhouse"
                                        className="img-fluid" 
                                        style={{width:"200px", filter: "brightness(1.2) contrast(1.1)"}}
                                    />
                                </Link>
                                <p className="text-white-75">Strategy building platform that lets you create, test, and analyze trading strategies with advanced backtesting capabilities.</p>
                            </div>
                            <div className="col-md-3 my-4 text-center">
                                <Link to="#" className="text-decoration-none text-center text-white">
                                    <img
                                        src={sensibullLogo}
                                        alt="fundhouse"
                                        className="img-fluid" 
                                        style={{width:"200px", filter: "brightness(1.2) contrast(1.1)"}}
                                    />   
                                </Link>
                                <p className="text-white-75">Market research platform that offers detailed insights on stocks, sectors, and market trends for informed decision making.</p>
                            </div>
                            <div className='col-md-2'></div>
                            <div className="col-md-3 my-4 text-center">
                                <Link to="#" className="text-decoration-none text-center text-white">
                                    <img
                                        src={streakLogo}
                                        alt="fundhouse"
                                        className="img-fluid" 
                                        style={{width:"200px", filter: "brightness(1.2) contrast(1.1)"}}
                                    />
                                </Link>
                                <p className="text-white-75">Automated trading simulation platform that allows you to create and backtest strategies without coding knowledge.</p>
                            </div>
                            <div className="col-md-3 my-4 text-center">
                                <Link to="#" className="text-decoration-none text-center text-white">
                                    <img
                                        src={tijoriIcon}
                                        alt="fundhouse"
                                        className="img-fluid" 
                                        style={{width:"200px", filter: "brightness(1.2) contrast(1.1)"}}
                                    />   
                                </Link>
                                <p className="text-white-75">Thematic investment simulator that helps you understand sector-based investing with diversified virtual portfolios.</p>
                            </div>
                            <div className="col-md-3 my-4 text-center">
                                <Link to="#" className="text-decoration-none text-center text-white">
                                    <img
                                        src={dittoLogo}
                                        alt="fundhouse"
                                        className="img-fluid" 
                                        style={{width:"200px", filter: "brightness(1.2) contrast(1.1)"}}
                                    />   
                                </Link>
                                <p className="text-white-75">Risk management tools and educational content to help you understand and manage trading risks effectively.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 text-center">
                        <button type="button" className="btn btn-light btn-lg mt-4 px-5 py-3 fw-bold" 
                                style={{ 
                                    fontSize: "1.2rem",
                                    borderRadius: "50px",
                                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                                    transition: "all 0.3s ease"
                                }}>
                            Start Free Simulation
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Universe;