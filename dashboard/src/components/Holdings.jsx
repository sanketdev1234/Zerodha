import { useState,useEffect } from "react";
const url="http://localhost:8080/getholding"

function Holdings() {
  let [holdings,setholdings]=useState([]);
      useEffect(()=>{
        async function generatedata(){
            let getdata=await fetch(url);
        let jsongetdata=await getdata.json();
        console.log("tha data is",[jsongetdata]);
    setholdings([jsongetdata][0].holding);
        }generatedata()
    } ,[])
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

        {holdings.map((stock,id) => {
            const curValue = stock.price * stock.Quantity;
            const isProfit = curValue - stock.Average * stock.Quantity >= 0.0;

            return (
              <tr key={stock.id}>
                <td>{stock.Name}</td>
                <td>{stock.Quantity}</td>
                <td>{stock.Average}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>{stock.Net}</td>
                <td style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>{stock.Day}</td>
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