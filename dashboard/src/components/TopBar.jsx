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
    <nav className="navbar bg-body-tertiary fixed-top border border-2">
  <div className="container-fluid">
    <Link className="navbar-brand text-center " to="/" >
<img src="../../public/logo.png" alt="Logo" width="50" height="24" className="d-inline-block align-text-center "/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
<Link
  className="offcanvas-title fs-3 text-decoration-none"
  id="offcanvasNavbarLabel"
  onClick={profileclicked}
  style={{ color: isprofileclicked ? "orange" : "blue" }}
>
  <Box display="flex" alignItems="center" gap={1}>
    
    <Avatar sx={{ bgcolor: deepOrange[500] }}>SZ</Avatar>
    <span>UJG157</span>
  </Box>
</Link>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active fs-5 fw-medium " aria-current="page" to="/"
            onClick={()=>handlelinkclick("Dashboard")}  
            style={{ color: linkactive === "Dashboard" ? "orange" : "black" }}
            >
              Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/apps" 
            onClick={()=>handlelinkclick("Apps")} style={{ color: linkactive === "Apps" ? "orange" : "black" }}>
            Apps</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/orders" 
            onClick={()=>handlelinkclick("Orders")}  style={{ color: linkactive === "Orders" ? "orange" : "black" }}>
              Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/holdings" onClick={()=>handlelinkclick("Holdings")} style={{ color: linkactive === "Holdings" ? "orange" : "black" }}>Holdings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/positions" onClick={()=>handlelinkclick("Positions")} style={{ color: linkactive === "Positions" ? "orange" : "black" }}>Positions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="/funds" onClick={()=>handlelinkclick("Funds")} style={{ color: linkactive === "Funds" ? "orange" : "black" }}>Funds</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link fw-normal dropdown-toggle" to="/app&services" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={()=>handlelinkclick("live market index ticker")} 
            style={{ color: linkactive === "live market index ticker" ? "orange" : "black" }}>
              live market index ticker 
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item fw-medium " to="#" style={{color:"green"}} id="gradient-text" >
              NIFTY 50 25104.25 1.05 (0.00%)</Link></li>
              <li><Link className="dropdown-item fw-medium" to="#" style={{color:"green"}} id="gradient-text" >
            SENSEX 82391.72 -53.49 (-0.06%)</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search"  onSubmit={handlesubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handlechangeinput} name="inputsearch"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
    );
}
export default TopBar;