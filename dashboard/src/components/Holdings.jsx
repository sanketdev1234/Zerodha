import {holdings}  from "./data/data.js";
function Holdings() {
    return (
        <div className="container text-center mt-5 py-5">
            <h1 className="fw-normal">Holdings ({holdings.length}) </h1>
            <div className="row">
              
        <table className="table table-striped text-start table-hover">
        <thead>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.Cost</th>
            <th>LTP</th>
            <th>Curr val</th>
            <th>P&L</th>
            <th>Net chg</th>
            <th>Day Chg</th>
          </tr>
        </thead>
        <tbody>

        {holdings.map((stock ,index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>{stock.net}</td>
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
export default Holdings;