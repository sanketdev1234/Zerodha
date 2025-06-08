import { Link } from 'react-router-dom';
function Hero_Product(){
    return (
        <div className="container text-center mt-5 py-5">
            <p className='mb-3 fs-1 fw-medium '>Zerodha Products</p>
            <h6 className='mb-3'>Sleek, modern, and intuitive trading platforms</h6>
            <h6>Check out our <Link to="#" >investment offerings →</Link></h6>
        </div>
    );
}
export default Hero_Product;