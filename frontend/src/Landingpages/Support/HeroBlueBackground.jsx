import { Link } from "react-router-dom";

function Hero_support() {
    return (
        <div className="container-fluid mt-5 py-5 px-3 px-md-5" style={{ backgroundColor: "#387ED1" }}>
            <div className="d-flex flex-column p-3 p-md-5 gap-4 w-100">

                {/* Header Row */}
                <div className="w-100 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between px-1 px-md-5 gap-2">
                    <Link to="#" className="fw-medium fs-4 text-decoration-none text-white">Support Portal</Link>
                    <Link to="#" className="fw-medium fs-5 text-white">Track Ticket</Link>
                </div>

                {/* Main Content */}
                <div className="w-100 d-flex flex-column flex-md-row align-items-start px-1 px-md-5 gap-5">

                    {/* Left Column */}
                    <div className="d-flex flex-column py-4 gap-4 align-items-start w-100 w-md-50">
                        <p className="fw-medium fs-5 fs-md-4 text-white">
                            Search for an answer or browse help topics to create a ticket
                        </p>

                        <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                            <option selected>What are Kite alerts and how to use them?</option>
                            <option value="1">Why did the KYC Registration Agency (KRA) send an email and SMS?</option>
                            <option value="2">Why does Zerodha ask to redo KYC?</option>
                            <option value="3">What is Securities Lending and Borrowing (SLB)?</option>
                        </select>

                        {/* Link Grid */}
                        <div className="d-flex flex-column flex-sm-row flex-wrap gap-4 w-100">
                            <Link to="#" className="fw-medium fs-6 text-white">Track account opening</Link>
                            <Link to="#" className="fw-medium fs-6 text-white">Track segment activation</Link>
                            <Link to="#" className="fw-medium fs-6 text-white">Intraday margins</Link>
                            <Link to="#" className="fw-medium fs-6 text-white">Kite user manual</Link>
                        </div>
                    </div>

                    {/* Right Column (Empty placeholder) */}
                    <div className="d-flex flex-column  mt-md-5 align-items-start w-50 gap-3 ">
                        <h4 className="fw-medium fs-4 text-white text-decoration-none">Featured</h4>
                        <Link to="#" className="fw-medium fs-6 text-white text-decoration-none ms-md-3  ">Surveillance measure on scrips - June 2025</Link>
                        <Link to="#" className="fw-medium fs-6 text-white text-decoration-none ms-md-3 ">Rights Entitlements listing in June 2025</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero_support;
