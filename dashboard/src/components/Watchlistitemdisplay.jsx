import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import DeleteIcon from '@mui/icons-material/Delete';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
function Watchlistitemdisplay({item,fun}){

    let [mouseenter , setmouseenter]=useState(false);
    let handlemousein=(event)=>{
        console.log(event)
        console.log("mouse in ");
        setmouseenter(true);
    }
    let handlemouseout=(event)=>{
        console.log(event)
        console.log("mouse leave");
        setmouseenter(false);
    }

return (<div key={item.id} className="container" onMouseEnter={handlemousein} onMouseLeave={handlemouseout} onClick={()=>fun(item)}
style={{
  backgroundColor: mouseenter ? "rgba(128, 128, 128,0.3)" : "",
  color: mouseenter ? "white" : "",
  fontWeight: mouseenter ? "500" : "",
  transition: "background-color 0.3s ease-in-out",
  
}}>
    <div className="row">
    <p className="text-start col-3">{item.name}</p>
    <p className="text-start col-3">{item.price}</p>
    <p className="text-start col-3" style={{color:item.isDown?"red":"green"}}>{item.percent}</p>
    <p className="text-start col-3">{item.isDown?<ArrowDownwardIcon sx={{ color: pink[500] }}/>:<ArrowUpwardIcon color="success"/>}</p>
    </div>
    {mouseenter?
    (<Box component="section" sx={{ p: 2 , display: 'flex', gap: 2 , justifyContent:'end'}}>
      <Avatar sx={{ bgcolor: deepOrange[500] ,cursor:"pointer"}}>B</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] ,cursor:"pointer"}}>S</Avatar>
    <Box component="section" sx={{ color:"black"}}>
    <FormatListBulletedIcon/>
    </Box>
    <Box component="section" sx={{color:"black"}}>
    <MoreHorizIcon/>
    </Box>
    <Box component="section" sx={{color:"black"}}>
    <BarChartIcon/>
    </Box>
        <Box component="section" sx={{color:"black" ,cursor:"pointer"}}>
    <DeleteIcon/>
    </Box>
    </Box>)  :""
}
    
</div>
);
}
export default Watchlistitemdisplay;