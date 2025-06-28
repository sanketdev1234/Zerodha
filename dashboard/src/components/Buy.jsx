import { useState,useEffect } from "react";
import axios from "axios";
const url="http://localhost:8080/getbuy"

function Buy() {
    let [buy,setbuy]=useState([]);
        useEffect(()=>{
          async function generatedata(){
              try {
                const response = await axios.get(url, { withCredentials: true });
                console.log("tha data is", response.data);
                setbuy(response.data.buy);
              } catch (error) {
                console.error("Error fetching buy orders:", error);
              }
          }
          generatedata()
      } ,[])
    return (
        <div className="container-fluid py-5 mt-5 " style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "100vh"
        }}>
            <div className="container">
                <h2 className="text-white fw-bold text-center mb-5">S-Exchange Buy Orders</h2>
                <h4 className="text-white-75 text-center mb-4">Total Buy Orders: {buy.length}</h4>
                
                <div className="row">
                    <div className="col-12">
                        <div className="table-responsive" style={{ 
                          background: "rgba(255,255,255,0.1)", 
                          backdropFilter: "blur(10px)",
                          borderRadius: "15px",
                          border: "1px solid rgba(255,255,255,0.2)",
                          overflow: "hidden"
                        }}>
                            <table className="table table-hover mb-0" style={{ color: "white" }}>
                                <thead style={{ background: "rgba(255,255,255,0.1)" }}>
                                    <tr>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Quantity</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Price Per Quantity</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Total</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Company</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: "white" }}>
                                    {buy.map((stock ,index) => {
                                        return (
                                            <tr key={stock._id} style={{ 
                                              borderBottom: "1px solid rgba(255,255,255,0.1)",
                                              transition: "all 0.3s ease",
                                              color: "white"
                                            }}>
                                                <td style={{ color: "white !important" }}>{stock.Quantity}</td>
                                                <td style={{ color: "white !important" }}>₹{stock.PricePerQuantity}</td>
                                                <td style={{ color: "white !important", fontWeight: "bold" }}>₹{stock.TotalPrice}</td>
                                                <td style={{ color: "white !important", fontWeight: "bold" }}>{stock.Company}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    );
}
export default Buy;