import { Link } from 'react-router-dom';
function Imageleft({imgleft ,heading, para , link1 , link2 , img1  , img2}){
    return (
        <div className="container mt-5 ">
            <div className="row px-5 d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                <Link>
            <img
            src={imgleft}
            alt="kite"
            className="img-fluid"
            />   
                </Link>
                </div>
                <div className='col-md-1'></div>

                <div className="col-md-5">
                <h1>{heading}</h1>

                <p>{para}</p>

                <div className='d-flex flex-row justify-content-between'>

                {link1 !== "" ? (
                <Link to="#" className="fw-medium" style={{ textDecoration: "none" }}>
                {link1}
                <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
                ) : null}


                {link2 !== "" ? (
                <Link to="#" className="fw-medium" style={{ textDecoration: "none" }}>
                {link2}
                <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
                ) : null}

                </div>


                <div className='d-flex flex-row justify-content-between mt-3'>
                <Link to="#" >
            <img
            src={img1}
            alt="google"
            className="img-fluid" style={{MaxWidth:"100px"}}
            />  
                </Link>
                <Link to="#">
            <img
            src={img2}
            alt="google"
            className="img-fluid " style={{MaxWidth:"100px"}}
            />  
                </Link>
                </div>
                </div>

            </div>
        </div>
    );
}
export default Imageleft;