function Summary() {
    return (
        <div className="container mt-5 py-5 ">
            <h4>Hi , Sanky </h4>
            <div className="row mt-5 mb-3">
            <div className=" col-md-3 d-flex flex-column align-items-start gap-2">
                <h5>Equity</h5>
                <h5>0
                    <h6>Margin available</h6>
                </h5>
            </div>
            <div className=" col-md-3 d-flex flex-column align-items-start gap-2">
                <h5>Margin used 0</h5>
                <h5>opening balance 0</h5>
            </div>
            <div className=" col-md-3 d-flex flex-column  align-items-start gap-2">
                <h5>Equity</h5>
                <h5>0
                    <h6>Margin available</h6>
                </h5>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-start gap-2">
                <h5>Margin used 0</h5>
                <h5>opening balance 0</h5>
            </div>

            <hr></hr>


            </div>
          <button type="button" className="btn btn-primary  btn-lg mt-4 custom-hover-black" >
            start investing
          </button>
        </div>
    );
}
export default Summary;