import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Avatar, Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import { deepOrange} from '@mui/material/colors';
function TopBar(){
  let [linkactive , setlinkactive]=useState("Dashboard");
  let [isprofileclicked , setisprofileclicked]=useState(false);
  
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
    
    <Avatar sx={{ bgcolor: deepOrange[500] }}>SZ</Avatar>
    <span className="text-white">S-Exchange User</span>
  </Box>
</Link>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
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
              Market Indices
            </Link>
            <ul className="dropdown-menu" style={{ background: "rgba(30, 60, 114, 0.95)", backdropFilter: "blur(10px)" }}>
              <li><Link className="dropdown-item fw-medium text-white" to="#" style={{color:"#28a745"}} id="gradient-text" >
              NIFTY 50 25104.25 1.05 (0.00%)</Link></li>
              <li><Link className="dropdown-item fw-medium text-white" to="#" style={{color:"#28a745"}} id="gradient-text" >
            SENSEX 82391.72 -53.49 (-0.06%)</Link></li>
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