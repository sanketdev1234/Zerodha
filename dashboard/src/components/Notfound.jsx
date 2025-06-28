import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100"
      style={{ 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white"
      }}
    >
      <div className="text-center">
        <h1 className="display-1 fw-bold mb-4">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <h4 className="text-white-75 mb-5">The page you are looking for doesn't exist in S-Exchange.</h4>
        
        <Link to="/" className="btn btn-light btn-lg px-5 py-3 fw-bold text-decoration-none"
              style={{ 
                fontSize: "1.2rem",
                borderRadius: "50px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease"
              }}>
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
export default NotFound;
