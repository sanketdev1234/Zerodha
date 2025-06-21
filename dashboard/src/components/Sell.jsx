import { useState,useEffect } from "react";
const url="http://localhost:8080/getsell"

function Sell() {
    let [sell,setsell]=useState([]);
        useEffect(()=>{
          async function generatedata(){
              let getdata=await fetch(url);
          let jsongetdata=await getdata.json();
          console.log("tha data is",[jsongetdata]);
      setsell([jsongetdata][0].sell);
          }generatedata()
      } ,[])
    return (
        <div className="container text-center mt-5 py-5">
            <h1 className="fw-normal">Sells ({sell.length}) </h1>
            <div className="row">
        <table className="table table-striped text-start table-hover">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Price Per Quantity</th>
            <th>Total</th>
            <th>Margin</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
        {sell.map((stock ,index) => {
            return (
              <tr key={stock._id}>
              
                <td>{stock.Quantity}</td>
                <td>{stock.PricePerQuantity}</td>
                <td>{stock.TotalPrice}</td>
                <td>{stock.Margin}</td>
                <td>{stock.Company}</td>
                </tr>
            );
          })}
        </tbody>
      </table>
          </div>  
        </div>
    );
}
export default Sell;