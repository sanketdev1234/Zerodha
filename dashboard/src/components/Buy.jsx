import { useState,useEffect } from "react";
const url="http://localhost:8080/getbuys"

function Buy() {
    let [buy,setbuy]=useState([]);
        useEffect(()=>{
          async function generatedata(){
              let getdata=await fetch(url);
          let jsongetdata=await getdata.json();
          console.log("tha data is",[jsongetdata]);
      setbuy([jsongetdata][0].buy);
          }generatedata()
      } ,[])
    return (
        <div className="container text-center mt-5 py-5">
            <h1 className="fw-normal">Buys ({buy.length}) </h1>
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

        {buy.map((stock ,index) => {
            const curValue = stock.price * stock.Quantity;
            const isProfit = curValue - stock.Average * stock.Quantity >= 0.0;

            return (
              <tr key={stock.id}>
              
                <td>{stock.Product}</td>
                <td>{stock.Name}</td>
                <td>{stock.Quantity}</td>
                <td>{stock.Average}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td  style={{fontWeight:"500",color: isProfit ? "green" : "red"}}>
                  {(curValue - stock.Average * stock.Quantity).toFixed(2)}
                </td>
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
export default Buy;