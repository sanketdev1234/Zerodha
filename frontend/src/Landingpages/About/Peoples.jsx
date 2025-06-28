function Peoples(){
    return (
        <div className="container-fluid py-5" style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white"
        }}>
            <div className="container">
                <div className="row py-3">
                <h2 className="col-md-12 text-center text-white fw-bold" style={{ fontSize: "2.5rem" }}>Developer</h2>
            
                <div className="col-md-2"></div>

            <div  className="col-md-3  d-flex flex-column justify-content-center align-items-center  gap-3 mt-4">
            <img
                src="../src/assets/S.webp"
                alt="Hero illustration of investment"
                className="img-fluid rounded-circle" 
                style={{ border: "4px solid white", boxShadow: "0 8px 25px rgba(0,0,0,0.3)" }}
            />
            <p className="fw-bold text-white" style={{ fontSize: "1.1rem" }}>Sanket Zilpe | IIIT Surat (Developer)</p>
            </div>
    <div className="col-md-1"></div>
            <div className="col-md-5 mt-5 pt-4">
    <p className="fw-medium text-white-75 fs-5">Sanket developed and created S-Exchange in June 2025 to provide a comprehensive trading simulation platform for learning and practicing trading strategies. Today, S-Exchange has become a leading platform for trading education and skill development.</p>
    <p className="fw-medium text-white-75 fs-5">He is a member of the GDG (IIIT Surat) and passionate about democratizing trading education through technology.</p>
    <p className="fw-bold text-warning fs-5">Connect on Homepage / Trading Community / Twitter</p>
            </div>
                <div className="col-md-1"></div>
                </div>
            </div>
        </div>
    )
}
export default Peoples;