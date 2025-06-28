function Trust() {
  return (
    <div className="container-fluid py-5" style={{ 
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white"
    }}>
      <div className="container">
        <div className="row d-flex justify-content-around align-items-center">
          {/* Left Column */}
          <div className="col-md-6 d-flex flex-column">
            <h2 className="mb-4 text-white fw-bold" style={{ fontSize: "2.5rem" }}>Trust with confidence</h2>

            <div className="fs-5 mb-4">
              <strong className="text-warning">Educational-first approach</strong>
              <p className="mb-0 text-white-75">
                That's why thousands of learners trust S-Exchange with their trading education, 
                providing a safe environment to practice and develop trading skills without financial risk.
              </p>
            </div>

            <div className="fs-5 mb-4">
              <strong className="text-info">No spam or gimmicks</strong>
              <p className="mb-0 text-white-75">
                No gimmicks, spam, "gamification", or annoying push notifications. High quality 
                trading simulator that you use at your pace, the way you like. Our philosophies.
              </p>
            </div>

            <div className="fs-5 mb-4">
              <strong className="text-success">The S-Exchange ecosystem</strong>
              <p className="mb-0 text-white-75">
                Not just a simulator, but a complete trading ecosystem. Our advanced features offer 
                you comprehensive tools for learning and practicing trading strategies.
              </p>
            </div>

            <div className="fs-5 mb-4">
              <strong className="text-primary">Learn better trading</strong>
              <p className="mb-0 text-white-75">
                With features like real-time charts, portfolio tracking, and risk management tools, 
                we don't just simulate trading, but actively help you become a better trader.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <img
              src="../src/assets/ecosystem.png"
              alt="Ecosystem illustration"
              className="img-fluid"
              style={{ filter: "brightness(1.1) contrast(1.1)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
