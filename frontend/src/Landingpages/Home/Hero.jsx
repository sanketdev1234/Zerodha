function Hero() {
  return (
    <div className="container mt-5 py-5 ">
      <div className="row d-flex flex-column ">
        <div className="col-md-8 offset-md-2 mb-5">
          <img
            src="../src/assets/homeHero.png"
            alt="Hero illustration of investment"
            className="img-fluid"
          />
        </div>

        <div className="col-md d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="mb-4">Invest in everything</h1>
          <h3 className="text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs,
            bonds, and more.
          </h3>
          <button type="button" className="btn btn-primary  btn-lg mt-4 custom-hover-black" >
            Sign Up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

