import {positions}  from "./data/data.js";
function Positions() {
    return (
        <div className="container text-center mt-5 py-5">
            <h1 className="fw-normal">Positions ({positions.length}) </h1>
            <div className="row">
              
        <table className="table table-striped text-start table-hover">
        <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
        </thead>
        <tbody>

        {positions.map((stock ,index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;

            return (
              <tr key={index}>
              
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td  style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>{stock.day}</td>
              
              </tr>
            );
          })}

        </tbody>
      </table>

            </div>
          <button type="button" className="btn btn-primary  btn-lg mt-4 custom-hover-black" >
            get started
          </button>
        </div>
    );
}
export default Positions;