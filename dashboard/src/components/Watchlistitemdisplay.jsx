import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import BuyClick from "./BuyClick";
import SellClick from "./SellClick";

function Watchlistitemdisplay({item, fun, onDelete}) {
    const [mouseenter, setmouseenter] = useState(false);

    const handlemousein = (event) => {
        setmouseenter(true);
    }

    const handlemouseout = (event) => {
        setmouseenter(false);
    }

    const handleDelete = (e) => {
        e.stopPropagation(); // Prevent triggering the parent onClick
        if (window.confirm('Are you sure you want to delete this item?')) {
            onDelete(item._id);
        }
    };

    return (
        <div key={item._id} className="container mb-2" onMouseEnter={handlemousein} onMouseLeave={handlemouseout} onClick={() => fun(item)}
            style={{
                backgroundColor: mouseenter ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.05)",
                color: "white",
                fontWeight: mouseenter ? "600" : "400",
                transition: "all 0.3s ease-in-out",
                borderRadius: "10px",
                padding: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                cursor: "pointer"
            }}>
            <div className="row align-items-center">
                <p className="text-start col-3 mb-0 fw-bold">{item.name}</p>
                <p className="text-start col-3 mb-0">₹{item.price}</p>
                <p className="text-start col-3 mb-0 fw-bold" style={{color: item.isDown ? "#ff6b6b" : "#51cf66"}}>{item.percent}</p>
                <p className="text-start col-3 mb-0">
                    {item.isDown ? 
                        <ArrowDownwardIcon sx={{ color: "#ff6b6b" }}/> : 
                        <ArrowUpwardIcon sx={{ color: "#51cf66" }}/>
                    }
                </p>
            </div>
            {mouseenter ? (
                <Box component="section" sx={{ 
                    p: 2, 
                    display: 'flex', 
                    gap: 2, 
                    justifyContent: 'end',
                    mt: 1,
                    pt: 1,
                    borderTop: "1px solid rgba(255,255,255,0.2)"
                }}>
                    <BuyClick Company={item.name}/>
                    <SellClick Company={item.name}/>
                    <Box component="section" sx={{ color: "white", cursor: "pointer"}}>
                        <FormatListBulletedIcon/>
                    </Box>
                    <Box component="section" sx={{ color: "white", cursor: "pointer"}}>
                        <MoreHorizIcon/>
                    </Box>
                    <Box component="section" sx={{ color: "white", cursor: "pointer"}}>
                        <BarChartIcon/>
                    </Box>
                    <Box component="section" sx={{ color: "#ff6b6b", cursor: "pointer"}} onClick={handleDelete}>
                        <DeleteIcon/>
                    </Box>
                </Box>
            ) : ""}
        </div>
    );
}

export default Watchlistitemdisplay;