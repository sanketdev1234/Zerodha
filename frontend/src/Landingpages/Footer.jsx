function Footer(){
    return (
<div   className="container-fluid  bg-light mt-5 pt-5 border border-2 text-white"
  style={{ background: "var(--bs-gradient)" }}>
    <div className="row py-3 ">
        <div className="col-md-1"></div>
        <div className="col-md-2 d-flex flex-column  align-content-start gap-3 me-5 mb-3">
                <img
            src="../src/assets/logo.svg"
            alt="Hero illustration of investment"
            className="img-fluid"
          />
            <p className="text-decoration-none text-body-emphasis">© 2010 - 2025, Zerodha Broking Ltd.All rights reserved.</p>
            <div className='d-flex  flex-row justify-content-start  align-content-center gap-3'>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-instagram"></i></a>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-linkedin"></i></a>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div className='  d-flex  flex-row justify-content-start  align-content-center gap-3'>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-youtube"></i></a>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="" className="fs-3 text-decoration-none text-body-emphasis"><i class="fa-brands fa-telegram"></i></a>
            </div>
        </div>
        <div className="col-md-2 mb-3 d-flex flex-column justify-content-between align-content-center  gap-3">
            <a href="" className="text-decoration-none text-body-emphasis fs-4 fw-medium">Account</a>
            <a href="" className="text-decoration-none text-body-emphasis">Open demat account</a>
            <a href="" className="text-decoration-none text-body-emphasis">NRI demat account</a>
            <a href="" className="text-decoration-none text-body-emphasis">Commodity</a>
            <a href="" className="text-decoration-none text-body-emphasis">Dematerialisation</a>
            <a href="" className="text-decoration-none text-body-emphasis">Fund transfer</a>
            <a href="" className="text-decoration-none text-body-emphasis">MTF</a>
            <a href="" className="text-decoration-none text-body-emphasis">Referral program</a>
        </div>
        <div className="col-md-2  mb-3  d-flex flex-column justify-content-between align-content-center gap-3">
            <a href="" className="text-decoration-none text-body-emphasis fs-4 fw-medium">Support</a>
            <a href="" className="text-decoration-none text-body-emphasis">Contact us</a>
            <a href="" className="text-decoration-none text-body-emphasis">Support portal</a>
            <a href="" className="text-decoration-none text-body-emphasis">How to file a complaint?</a>
            <a href="" className="text-decoration-none text-body-emphasis">Status of your complaints</a>
            <a href="" className="text-decoration-none text-body-emphasis">Bulletin</a>
            <a href="" className="text-decoration-none text-body-emphasis">Circular</a>
            <a href="" className="text-decoration-none text-body-emphasis">Z-Connect blog</a>
        </div>
        <div className="col-md-2  mb-3  d-flex flex-column justify-content-between align-content-center gap-3">
            <a href="" className="text-decoration-none text-body-emphasis fs-4 fw-medium">Company</a>
            <a href="" className="text-decoration-none text-body-emphasis">About</a>
            <a href="" className="text-decoration-none text-body-emphasis">Philosophy</a>
            <a href="" className="text-decoration-none text-body-emphasis">Press & media</a>
            <a href="" className="text-decoration-none text-body-emphasis">Careers</a>
            <a href="" className="text-decoration-none text-body-emphasis">Zerodha Cares (CSR)</a>
            <a href="" className="text-decoration-none text-body-emphasis">Zerodha.tech</a>
            <a href="" className="text-decoration-none text-body-emphasis">Open source</a>
        </div>
        <div className="col-md-2 mb-3 d-flex flex-column justify-content-between align-content-center gap-3">
            <a href="" className="text-decoration-none text-body-emphasis fs-4 fw-medium">Quick links</a>
            <a href="" className="text-decoration-none text-body-emphasis">Upcoming IPOs</a>
            <a href="" className="text-decoration-none text-body-emphasis">Brokerage charges</a>
            <a href="" className="text-decoration-none text-body-emphasis">Market holidays</a>
            <a href="" className="text-decoration-none text-body-emphasis">Economic calendar</a>
            <a href="" className="text-decoration-none text-body-emphasis">Calculators</a>
            <a href="" className="text-decoration-none text-body-emphasis">Market</a>
            <a href="" className="text-decoration-none text-body-emphasis">Sector</a>
        </div>
        <div className="col-md-1"></div>
    </div>
</div>
    )
}
export default Footer;