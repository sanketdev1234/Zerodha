import { Link, useNavigate } from 'react-router-dom';
import { useState ,useEffect} from 'react';
import { Avatar, Box } from "@mui/material";
import { deepOrange} from '@mui/material/colors';
import user_present from './Helper';
import axios from 'axios';

function TopBar(){
  let [linkactive , setlinkactive]=useState("Dashboard");
  let [isprofileclicked , setisprofileclicked]=useState(false);
  let [isLoggedIn, setIsLoggedIn] = useState({});
  let [todisplay,settodisplay]=useState("");
  let [money,setmoney]=useState("");
  const frontendUrl = import.meta.env.VITE_FRONTEND_URL || 'http://localhost:3000';
  
  useEffect(() => {
    user_present().then((res) => {
      console.log("Response from user_present:", res);
      console.log(res.username);
      console.log(typeof (res.username));
      console.log(res.username.charAt(0));
      setIsLoggedIn(res);
      settodisplay(res.username.charAt(0))
      setmoney(res.virtualBalance);
    });
  }, []);
  
  let handlelogout=async()=>{
    await axios.get("/auth/logout", { withCredentials: true })
    window.location.href = frontendUrl;
  }
  let handlelinkclick=(val)=>{
  setlinkactive(val);
  }
  let profileclicked=()=>{
    setisprofileclicked(!isprofileclicked);
  }

  let handlechangeinput=(event)=>{
    console.log("sanket" ,event.target.name);
    console.log(event.target.value);
    console.log(event);
    console.log(isLoggedIn.username)
    console.log("the type is",typeof(isLoggedIn.username))
    console.log("first character::::::::::::" , isLoggedIn.username[0])
    setlinkactive(event.target.value);
    }


let handlesubmit=(event)=>{
    event.preventDefault();
    console.log(linkactive);
}

    return (
    <>
    <nav className="navbar fixed-top border border-2" style={{ 
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white"
    }}>
  <div className="container-fluid">
    <Link className="navbar-brand text-center" to="/" >
      <span className="text-white fw-bold fs-4">S-Exchange</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{ 
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white"
    }}>
      <div className="offcanvas-header">
<Link
  className="offcanvas-title fs-3 text-decoration-none"
  id="offcanvasNavbarLabel"
  onClick={profileclicked}
  style={{ color: isprofileclicked ? "#ffc107" : "white" }}
>
  <Box display="flex" alignItems="center" gap={1}>
    
    <Avatar sx={{ bgcolor: deepOrange[500] }}>{todisplay}</Avatar>
    <span className="text-white">{isLoggedIn.username} </span>
  
  </Box>
  <span className="text-white fs-4">[ Remaining balance : {money}]</span>
  <p onClick={handlelogout}>{todisplay?"Logout":""}</p>
</Link>
        <button type="button" className="btn)-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link fw-normal" href={frontendUrl} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
              🏠 Home
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link active fs-5 fw-medium" aria-current="page" to="/"
            onClick={()=>handlelinkclick("Dashboard")}  
            style={{ color: linkactive === "Dashboard" ? "#ffc107" : "white" }}
            >
              Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/buy" 
            onClick={()=>handlelinkclick("Buy")} style={{ color: linkactive === "Buy" ? "#ffc107" : "white" }}>
            Buy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/orders" 
            onClick={()=>handlelinkclick("Orders")}  style={{ color: linkactive === "Orders" ? "#ffc107" : "white" }}>
              Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/holdings" onClick={()=>handlelinkclick("Holdings")} style={{ color: linkactive === "Holdings" ? "#ffc107" : "white" }}>Holdings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/positions" onClick={()=>handlelinkclick("Positions")} style={{ color: linkactive === "Positions" ? "#ffc107" : "white" }}>Positions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/sell" onClick={()=>handlelinkclick("sell")} style={{ color: linkactive === "sell" ? "#ffc107" : "white" }}>Sell</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link fw-normal dropdown-toggle" to="/app&services" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>handlelinkclick("live market index ticker")} 
            style={{ color: linkactive === "live market index ticker" ? "#ffc107" : "white" }}>
              TRADING BOT
            </Link>
            <ul className="dropdown-menu" style={{ background: "rgba(30, 60, 114, 0.95)", backdropFilter: "blur(10px)" }}>
              <li><Link className="dropdown-item fw-medium text-white" to="/aiguide" style={{color:"#28a745"}} id="gradient-text" >
              AI GUIDE</Link></li>
              <li><Link className="dropdown-item fw-medium text-white" to="/aichat" style={{color:"#28a745"}} id="gradient-text" >
            CHAT WITH AI</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search"  onSubmit={handlesubmit}>
          <input className="form-control me-2" type="search" placeholder="Search stocks..." aria-label="Search" onChange={handlechangeinput} name="inputsearch" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", color: "white" }}/>
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
    );
}
export default TopBar;