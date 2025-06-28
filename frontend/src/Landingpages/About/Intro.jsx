function Intro(){
    return (
        <div className="container-fluid py-5" style={{ 
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white"
        }}>
            <div className="container">
                <div className="row py-5 d-flex flex-row justify-content-center border-top border-1 border-white-25">
                    <div className="col-md-2"></div>
                    <div className="col-md d-flex flex-column">
                    <p className="text-white-75 fs-5">
We launched S-Exchange in June 2025 with the goal of breaking all barriers that traders and investors face in learning and practicing trading strategies. We named the platform S-Exchange, representing Secure Exchange, focusing on providing a safe environment for trading education.
                    </p>
                    <p className="text-white-75 fs-5">
In addition, we run comprehensive online educational initiatives and community platforms to empower retail traders and investors with knowledge and practical experience.
                    </p>
                    <p className="text-white-75 fs-5">
Today, our innovative simulation technology and educational approach have made us a leading platform for trading education and skill development.
                    </p>
                    </div>
                    <div className="col-md d-flex flex-column">
                    <p className="text-white-75 fs-5">
Our development team has created advanced trading simulation tools with the goal of democratizing trading education and making it accessible to everyone.
                    </p>
                    <p className="text-white-75 fs-5">
Thousands of learners use our platform daily to practice trading strategies, learn market dynamics, and develop their trading skills in a risk-free environment.
                    </p>
                    <p className="text-white-75 fs-5">
And yet, we are always innovating and improving our platform every day. Stay updated with our latest features and educational content through our blog and community forums.
                    </p>
                    </div>
    <div className="col-md-2"></div>
                </div>
            </div>
        </div>
    )
}
export default Intro;