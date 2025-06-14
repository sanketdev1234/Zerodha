import { useState,useEffect } from "react";
const url="http://localhost:8080/getorder"
function Orders() {
    let [order,setorder]=useState([]);
        useEffect(()=>{
          async function generatedata(){
              let getdata=await fetch(url);
          let jsongetdata=await getdata.json();
          console.log("tha data is",[jsongetdata]);
      setorder([jsongetdata][0].order);
          }generatedata()
      } ,[])
    return (
        <div className="container text-center mt-5 py-5">
            <h1 className="fw-normal">order ({order.length}) </h1>
            <div className="row">
              
        <table className="table table-striped text-start table-hover">
        <thead>
          <tr>
            <th>Nmae</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>

        {order.map((stock ) => {
            return (
              <tr key={stock.id}>
              
                <td>{stock.Name}</td>
                <td>{stock.price}</td>
                <td>{stock.Quantity}</td>
                <td>{stock.Mode}</td>
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
export default Orders;