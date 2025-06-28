import { useState,useEffect } from "react";
import axios from "axios";
const url="http://localhost:8080/getposition"

function Positions() {
    let [position,setposition]=useState([]);
        useEffect(()=>{
          async function generatedata(){
              try {
                const response = await axios.get(url, { withCredentials: true });
                console.log("tha data is", response.data);
                setposition(response.data.position);
              } catch (error) {
                console.error("Error fetching positions:", error);
              }
          }
          generatedata()
      } ,[])
    return (
        <div className="container-fluid py-5" style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "100vh"
        }}>
            <div className="container">
                <h2 className="text-white fw-bold text-center mb-5">S-Exchange Positions</h2>
                <h4 className="text-white-75 text-center mb-4">Total Positions: {position.length}</h4>
                
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
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Product</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Instrument</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Quantity</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Average</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>LTP</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>P&L</th>
                                        <th className="text-white border-0" style={{ color: "white !important" }}>Change</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: "white" }}>
                                    {position.map((stock ,index) => {
                                        const curValue = stock.price * stock.Quantity;
                                        const isProfit = curValue - stock.Average * stock.Quantity >= 0.0;

                                        return (
                                            <tr key={stock.id} style={{ 
                                              borderBottom: "1px solid rgba(255,255,255,0.1)",
                                              transition: "all 0.3s ease",
                                              color: "white"
                                            }}>
                                                <td style={{ color: "white !important" }}>{stock.Product}</td>
                                                <td style={{ color: "white !important", fontWeight: "bold" }}>{stock.Name}</td>
                                                <td style={{ color: "white !important" }}>{stock.Quantity}</td>
                                                <td style={{ color: "white !important" }}>₹{stock.Average}</td>
                                                <td style={{ color: "white !important", fontWeight: "bold" }}>₹{stock.price.toFixed(2)}</td>
                                                <td style={{ color: isProfit ? "#51cf66" : "#ff6b6b", fontWeight: "bold" }}>
                                                    ₹{(curValue - stock.Average * stock.Quantity).toFixed(2)}
                                                </td>
                                                <td style={{ color: isProfit ? "#51cf66" : "#ff6b6b", fontWeight: "bold" }}>
                                                    {stock.Day}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-4">
                    <button type="button" className="btn btn-light btn-lg px-5 py-3 fw-bold" 
                            style={{ 
                              fontSize: "1.2rem",
                              borderRadius: "50px",
                              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                              transition: "all 0.3s ease"
                            }}>
                        Close All Positions
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Positions;