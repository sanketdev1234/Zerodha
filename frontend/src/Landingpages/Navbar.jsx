import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react';
import user_present from '../helper';
import logo from '../assets/logo.svg';
import kiteLogo from '../assets/kite-logo.svg';
import consoleIcon from '../assets/console.svg';
import varsityIcon from '../assets/varsity (2).png';
import tqnaIcon from '../assets/tqna.png';

function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState({});
    useEffect(()=>{
        user_present().then((res)=>{
          console.log(res);
            setIsLoggedIn(res);
        })
    },[])
    
    const dashboardUrl = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:3001';
    
    return (
    <>
    <nav className="navbar bg-body-tertiary fixed-top border border-2">
  <div className="container-fluid">
    <Link className="navbar-brand text-center " to="/" >
<img src={logo} alt="Logo" width="200" height="24" className="d-inline-block align-text-center "/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fs-3" id="offcanvasNavbarLabel">S-Exchange</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active fs-5 fw-medium" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-normal" href={isLoggedIn.username ? dashboardUrl : "/login"} target="_blank" rel="noopener noreferrer">Dashboard</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/signup">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/product">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/pricing">Pricings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/support">Support</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link fw-normal dropdown-toggle" to="/app&services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Apps & Services
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item fw-normal" to="/kite">
          <img
            src={kiteLogo}
            alt="kite"
            className="img-fluid"
          />               
                Kite</Link></li>
              <li><Link className="dropdown-item fw-normal" to="/console">
          <img
            src={consoleIcon}
            alt="console"
            className="img-fluid"
          />
            Console</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><Link className="dropdown-item mb-3 ms-3" to="/tutorials">
          <img
            src={varsityIcon}
            alt="Hero illustration of investment"
            className="img-fluid"
          />
                &nbsp;Tutorials</Link></li>
              <li><Link className="dropdown-item ms-3" to="/quiz">
          <img
            src={tqnaIcon}
            alt="Hero illustration of investment"
            className="img-fluid"
          />
                Quiz</Link></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
    );
}
export default Navbar;