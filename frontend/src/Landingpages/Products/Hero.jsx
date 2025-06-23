import { Link } from 'react-router-dom';
function Hero_Product(){
    return (
        <div className="container-fluid text-center py-5" style={{ 
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          color: "white"
        }}>
            <p className='mb-3 fs-1 fw-bold text-white'>S-Exchange Products</p>
            <h6 className='mb-3 text-white-75' style={{ fontSize: "1.2rem" }}>Advanced, secure, and intuitive trading simulation platforms</h6>
            <h6 className="text-warning fw-bold">Check out our <Link to="#" className="text-warning">trading features →</Link></h6>
        </div>
    );
}
export default Hero_Product;