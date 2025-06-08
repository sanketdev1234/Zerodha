function Trust() {
  return (
    <div className="container mt-4">
      <div className="row  d-flex justify-content-around align-items-center">
        {/* Left Column */}
        <div className="col-md-6 d-flex  flex-column">
          <h2 className="mb-4">Trust with confidence</h2>

          <div className="fs-5 mb-4">
            <strong>Customer-first always</strong>
            <p className="mb-0">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments
              and contribute to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="fs-5 mb-4">
            <strong>No spam or gimmicks</strong>
            <p className="mb-0">
              No gimmicks, spam, "gamification", or annoying push notifications. High quality apps
              that you use at your pace, the way you like. Our philosophies.
            </p>
          </div>

          <div className="fs-5 mb-4">
            <strong>The Zerodha universe</strong>
            <p className="mb-0">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer
              you tailored services specific to your needs.
            </p>
          </div>

          <div className="fs-5 mb-4">
            <strong>Do better with money</strong>
            <p className="mb-0">
              With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,
              but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6">
          <img
            src="../src/assets/ecosystem.png"
            alt="Ecosystem illustration"
            className="img-fluid"
          />
        </div>
<div className="col-md-10 mt-3  d-flex justify-content-end gap-5">
  <a href=""  className="fw-medium" style={{ textDecoration: "none" }}>
    Explore our products
    <i className="fa-solid fa-arrow-right ms-2"></i>
  </a>
  <a href="" className="fw-medium"  style={{ textDecoration: "none" }}>
    Try Kite demo
    <i className="fa-solid fa-arrow-right ms-2"></i>
  </a>
</div>

        <div className="col-md-10  mt-5 text-center ">
          <img
            src="../src/assets/presslogos.png"
            alt="Ecosystem illustration"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
}

export default Trust;
