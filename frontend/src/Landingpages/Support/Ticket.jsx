import { Link } from 'react-router-dom';

function Ticket() {
    return (
        <div className="container mt-5 py-5 ">
            <h4 className="text-center">To create a ticket, select a relevant topic</h4>
            <div className="row">
                <div className='col-md-2'></div>

                {/* Account Opening */}
                <div className="col-md-3 d-flex flex-column justify-content-evenly align-items-start mt-5 gap-3">
                    <Link to="#" className='text-decoration-none text-black'>
                        <i className="fa-regular fa-user me-2"></i>
                        Account Opening
                    </Link>
                    <Link to="#" className='text-decoration-none'>Resident individual</Link>
                    <Link to="#" className='text-decoration-none'>Minor</Link>
                    <Link to="#" className='text-decoration-none'>Non Resident Indian (NRI)</Link>
                    <Link to="#" className='text-decoration-none'>Company, Partnership, HUF and LLP</Link>
                    <Link to="#" className='text-decoration-none'>Glossary</Link>
                </div>

                {/* Your Zerodha Account */}
                <div className="col-md-3 d-flex flex-column justify-content-evenly align-items-start  mt-5 gap-3">
                    <Link to="#" className='text-decoration-none text-black'>
                        <i className="fa-solid fa-user-plus me-2"></i>
                        Your Zerodha Account
                    </Link>
                    <Link to="#" className='text-decoration-none'>Your Profile</Link>
                    <Link to="#" className='text-decoration-none'>Account modification</Link>
                    <Link to="#" className='text-decoration-none'>Client Master Report (CMR) and Depository Participant (DP)</Link>
                    <Link to="#" className='text-decoration-none'>Nomination</Link>
                    <Link to="#" className='text-decoration-none'>Transfer and conversion of securities</Link>
                </div>

                {/* Kite */}
                <div className="col-md-3 d-flex flex-column justify-content-evenly align-items-start  mt-5 gap-3">
                    <Link to="#" className='text-decoration-none text-black'>
                        <i className="fa-solid fa-chart-simple me-2"></i>
                        Kite
                    </Link>
                    <Link to="#" className='text-decoration-none'>IPO</Link>
                    <Link to="#" className='text-decoration-none'>Trading FAQs</Link>
                    <Link to="#" className='text-decoration-none'>Margin Trading Facility (MTF) and Margins</Link>
                    <Link to="#" className='text-decoration-none'>Charts and orders</Link>
                    <Link to="#" className='text-decoration-none'>Alerts and Nudges</Link>
                    <Link to="#" className='text-decoration-none'>General</Link>
                </div>

                <div className='col-md-2'></div>

                {/* Funds */}
                <div className="col-md-3 d-flex flex-column justify-content-evenly align-items-start mt-5 gap-3">
                    <Link to="#" className='text-decoration-none text-black'>
                        <i className="fa-regular fa-calendar me-2"></i>
                        Funds
                    </Link>
                    <Link to="#" className='text-decoration-none'>Add money</Link>
                    <Link to="#" className='text-decoration-none'>Withdraw money</Link>
                    <Link to="#" className='text-decoration-none'>Add bank accounts</Link>
                    <Link to="#" className='text-decoration-none'>eMandates</Link>
                </div>

                {/* Console */}
                <div className="col-md-3 d-flex flex-column justify-content-evenly align-items-start mt-5 gap-3">
                    <Link to="#" className='text-decoration-none text-black'>
                        <i className="fa-regular fa-circle-dot me-2"></i>
                        Console
                    </Link>
                    <Link to="#" className='text-decoration-none'>Portfolio</Link>
                    <Link to="#" className='text-decoration-none'>Corporate actions</Link>
                    <Link to="#" className='text-decoration-none'>Funds statement</Link>
                    <Link to="#" className='text-decoration-none'>Reports</Link>
                    <Link to="#" className='text-decoration-none'>Profile</Link>
                    <Link to="#" className='text-decoration-none'>Segments</Link>
                </div>

                {/* Coin */}
                <div className="col-md-3 d-flex flex-column justify-content-evenly align-items-start mt-5 gap-3">
                    <Link to="#" className='text-decoration-none text-black'>
                        <i className="fa-solid fa-coins me-2"></i>
                        Coin
                    </Link>
                    <Link to="#" className='text-decoration-none'>Mutual funds</Link>
                    <Link to="#" className='text-decoration-none'>National Pension Scheme (NPS)</Link>
                    <Link to="#" className='text-decoration-none'>Features on Coin</Link>
                    <Link to="#" className='text-decoration-none'>Payments and Orders</Link>
                    <Link to="#" className='text-decoration-none'>General</Link>
                </div>
            </div>
        </div>
    );
}

export default Ticket;
