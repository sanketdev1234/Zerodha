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
                            <option selected>How to get started with S-Exchange trading simulator?</option>
                            <option value="1">How to set up virtual portfolio and start trading?</option>
                            <option value="2">How to use interactive charts and technical analysis?</option>
                            <option value="3">How to create and test trading strategies?</option>
                        </select>

                        {/* Link Grid */}
                        <div className="d-flex flex-column flex-sm-row flex-wrap gap-4 w-100">
                            <Link to="#" className="fw-medium fs-6 text-white">Track account setup</Link>
                            <Link to="#" className="fw-medium fs-6 text-white">Track learning progress</Link>
                            <Link to="#" className="fw-medium fs-6 text-white">Virtual trading guide</Link>
                            <Link to="#" className="fw-medium fs-6 text-white">Platform user manual</Link>
                        </div>
                    </div>

                    {/* Right Column (Empty placeholder) */}
                    <div className="d-flex flex-column  mt-md-5 align-items-start w-50 gap-3 ">
                        <h4 className="fw-medium fs-4 text-white text-decoration-none">Featured</h4>
                        <Link to="#" className="fw-medium fs-6 text-white text-decoration-none ms-md-3  ">New trading simulator features - June 2025</Link>
                        <Link to="#" className="fw-medium fs-6 text-white text-decoration-none ms-md-3 ">Advanced charting tools update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero_support;
