import { Link } from 'react-router-dom';
function Universe(){
    return (
        <div className="container mt-5 py-5 ">
        <div className="row ">

        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
<p className="fs-1 fw-medium">The Zerodha Universe</p>
<p className="fs-5">Extend your trading and investment experience even further with our partner platforms</p>
        </div>

        <div className="col-12 ">
            <div className="row">
                <div className='col-md-2 '></div>
            <div className="col-md-3 my-4 text-center">
            <Link to="#" className="text-decoration-none text-center text-black">
            <img
            src="./src/assets/zerodhafundhouse.png"
            alt="fundhouse"
            className="img-fluid" style={{width:"200px"}}
            />
            </Link>
<p>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
            </div>
            <div className="col-md-3 my-4 text-center">
            <Link to="#" className="text-decoration-none text-center text-black">
            <img
            src="./src/assets/smallcase-logo.png"
            alt="fundhouse"
            className="img-fluid" style={{width:"200px"}}
            />
            </Link>
<p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col-md-3 my-4 text-center">
            <Link to="#" className="text-decoration-none text-center text-black">
            <img
            src="./src/assets/sensibull-logo.svg"
            alt="fundhouse"
            className="img-fluid" style={{width:"200px"}}
            />   
            </Link>
<p>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
            </div>
<div className='col-md-2'></div>
            <div className="col-md-3 my-4 text-center">
            <Link to="#" className="text-decoration-none text-center text-black">
            <img
            src="./src/assets/streak-logo.png"
            alt="fundhouse"
            className="img-fluid" style={{width:"200px"}}
            />
            </Link>
<p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
            </div>
            <div className="col-md-3 my-4 text-center">
            <Link to="#" className="text-decoration-none text-center text-black">
            <img
            src="./src/assets/tijori.svg"
            alt="fundhouse"
            className="img-fluid " style={{width:"200px"}}
            />   
            </Link>
<p>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
            </div>
            <div className="col-md-3 my-4 text-center">
         <Link to="#" className="text-decoration-none text-center text-black">
            <img
            src="./src/assets/ditto-logo.png"
            alt="fundhouse"
            className="img-fluid " style={{width:"200px"}}
            />   
            </Link>
<p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
            </div>
            </div>
        </div>

        <div className="col-12 text-center">
        <button type="button" className="btn btn-primary  btn-lg mt-4 custom-hover-black" >
            Sign Up for free
        </button>
        </div>

        </div>
        </div>
    );
}
export default Universe;