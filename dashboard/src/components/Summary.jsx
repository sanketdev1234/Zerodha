import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { pink } from '@mui/material/colors';
import ApexChart from "./StockChart"
function Summary({arr}) {
    

    return (
        <div className="container-fluid py-5" style={{ 
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "100vh"
        }}>
            <div className="container">
                <h2 className="text-white fw-bold mb-4">Welcome to S-Exchange Trading Simulator</h2>
                <h4 className="text-white-75 mb-5">Hi, Trader! Ready to practice your strategies?</h4>
                
                <div className="row mt-5 mb-3 p-4" style={{ 
                  background: "rgba(255,255,255,0.1)", 
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>
                    <div className="col-md-4">
                        <h6 className="text-white fw-bold">{arr[0].name}</h6>
                    </div>
                    <div className="col-md-4">
                        <h6 className="text-white fw-bold">₹{arr[0].price}</h6>
                    </div>
                    <div className="col-md-4">
                        <span className="me-2 text-white fw-bold">{arr[0].percent}</span>
                        {arr[0].isDown ? 
                          <ArrowDownwardIcon sx={{ color: "#ff6b6b" }}/> : 
                          <ArrowUpwardIcon sx={{ color: "#51cf66" }}/>
                        }
                    </div>
                </div>

                <div className="mt-4 p-4" style={{ 
                  background: "rgba(255,255,255,0.1)", 
                  backdropFilter: "blur(10px)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255,255,255,0.2)"
                }}>
                    <ApexChart/>
                </div>
                
                <button type="button" className="btn btn-light btn-lg mt-4 px-5 py-3 fw-bold" 
                        style={{ 
                          fontSize: "1.2rem",
                          borderRadius: "50px",
                          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                          transition: "all 0.3s ease"
                        }}>
                    Toggle Chart View
                </button>
            </div>
        </div>
    );
}
export default Summary;