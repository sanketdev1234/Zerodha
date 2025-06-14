import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { pink } from '@mui/material/colors';
import ApexChart from "./StockChart"
function Summary({arr}) {
    

    return (
        <div className="container mt-5 py-5 ">
            <h4>Hi , Sanky </h4>
            <div className="row mt-5 mb-3">
            <div className=" col-md-4">
                    <h6>{arr[0].name}</h6>
            
            </div>
            <div className=" col-md-4">
                <h6>{arr[0].price}</h6>
            </div>
            <div className=" col-md-4 ">
                    <span className="me-2">{arr[0].percent}</span>
{arr[0].isDown?<ArrowDownwardIcon sx={{ color: pink[500] }}/>:<ArrowUpwardIcon color="success"/>}
            </div>
            <hr></hr>

            </div>
<div>
<ApexChart/>
</div>
        <button type="button" className="btn btn-primary  btn-lg mt-4 custom-hover-black" >
        show/hide graph
        </button>
        </div>
    );
}
export default Summary;