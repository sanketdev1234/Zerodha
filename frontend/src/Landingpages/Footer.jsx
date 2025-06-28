function Footer(){
    return (
<div className="container-fluid py-5" style={{ 
  background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
  color: "white"
}}>
    <div className="container">
        <div className="row py-3">
            <div className="col-md-1"></div>
            <div className="col-md-2 d-flex flex-column align-content-start gap-3 me-5 mb-3">
                    <img
                src="../src/assets/logo.svg"
                alt="Hero illustration of investment"
                className="img-fluid"
                style={{ filter: "brightness(1.2) contrast(1.1)" }}
              />
                <p className="text-white-75">© 2025, S-Exchange Trading Simulator. All rights reserved.</p>
                <div className='d-flex flex-row justify-content-start align-content-center gap-3'>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-instagram"></i></a>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-facebook"></i></a>
                </div>
                <div className='d-flex flex-row justify-content-start align-content-center gap-3'>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-youtube"></i></a>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="" className="fs-3 text-decoration-none text-white"><i class="fa-brands fa-telegram"></i></a>
                </div>
            </div>
            <div className="col-md-2 mb-3 d-flex flex-column justify-content-between align-content-center gap-3">
                <a href="" className="text-decoration-none text-white fs-4 fw-bold">Account</a>
                <a href="" className="text-decoration-none text-white-75">Open simulation account</a>
                <a href="" className="text-decoration-none text-white-75">Virtual portfolio</a>
                <a href="" className="text-decoration-none text-white-75">Trading simulator</a>
                <a href="" className="text-decoration-none text-white-75">Learning modules</a>
                <a href="" className="text-decoration-none text-white-75">Strategy builder</a>
                <a href="" className="text-decoration-none text-white-75">Risk management</a>
                <a href="" className="text-decoration-none text-white-75">Referral program</a>
            </div>
            <div className="col-md-2 mb-3 d-flex flex-column justify-content-between align-content-center gap-3">
                <a href="" className="text-decoration-none text-white fs-4 fw-bold">Support</a>
                <a href="" className="text-decoration-none text-white-75">Contact us</a>
                <a href="" className="text-decoration-none text-white-75">Support portal</a>
                <a href="" className="text-decoration-none text-white-75">How to get started?</a>
                <a href="" className="text-decoration-none text-white-75">Platform guide</a>
                <a href="" className="text-decoration-none text-white-75">FAQ</a>
                <a href="" className="text-decoration-none text-white-75">Tutorials</a>
                <a href="" className="text-decoration-none text-white-75">S-Exchange blog</a>
            </div>
            <div className="col-md-2 mb-3 d-flex flex-column justify-content-between align-content-center gap-3">
                <a href="" className="text-decoration-none text-white fs-4 fw-bold">Company</a>
                <a href="" className="text-decoration-none text-white-75">About</a>
                <a href="" className="text-decoration-none text-white-75">Mission</a>
                <a href="" className="text-decoration-none text-white-75">Press & media</a>
                <a href="" className="text-decoration-none text-white-75">Careers</a>
                <a href="" className="text-decoration-none text-white-75">S-Exchange Cares</a>
                <a href="" className="text-decoration-none text-white-75">S-Exchange.tech</a>
                <a href="" className="text-decoration-none text-white-75">Open source</a>
            </div>
            <div className="col-md-2 mb-3 d-flex flex-column justify-content-between align-content-center gap-3">
                <a href="" className="text-decoration-none text-white fs-4 fw-bold">Quick links</a>
                <a href="" className="text-decoration-none text-white-75">Trading simulator</a>
                <a href="" className="text-decoration-none text-white-75">Learning academy</a>
                <a href="" className="text-decoration-none text-white-75">Market hours</a>
                <a href="" className="text-decoration-none text-white-75">Economic calendar</a>
                <a href="" className="text-decoration-none text-white-75">Calculators</a>
                <a href="" className="text-decoration-none text-white-75">Market data</a>
                <a href="" className="text-decoration-none text-white-75">Sector analysis</a>
            </div>
            <div className="col-md-1"></div>
        </div>
    </div>
</div>
    )
}
export default Footer;