import { Link } from 'react-router-dom';
function TopBar(){
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
        <Link className="offcanvas-title fs-3 text-decoration-none " id="offcanvasNavbarLabel ">
          <i className='fa-solid fa-user-tie me-2'></i>
          UJG157</Link>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active fs-5 fw-medium" aria-current="page" to="#">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="#">Apps</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="#">Orders</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="#">Holdings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="#">Positions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-normal" to="#">Funds</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link fw-normal dropdown-toggle" to="/app&services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              live market index ticker 
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item fw-medium " to="#" style={{color:"green"}} id="gradient-text">
              NIFTY 50 25104.25 1.05 (0.00%)</Link></li>
              <li><Link className="dropdown-item fw-medium" to="#" style={{color:"green"}} id="gradient-text">
            SENSEX 82391.72 -53.49 (-0.06%)</Link></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
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
export default TopBar;