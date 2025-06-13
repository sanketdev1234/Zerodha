import React from "react";
import WatchList from "./WatchList";
import Positions from "./Positions";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Funds from "./Funds";
import Apps from "./Apps";
import Summary from "./Summary";
import { Routes,Route} from "react-router-dom";
import NotFound from "./Notfound";
import { useState } from "react";
function Dashboard() {
    let [arr,setarr]=useState([{name:"select-name" , price:100,percent:"100%",isDown:false,id:"1234"}]);
    function modifyarr(item){
        const newarr=[item];
        console.log(newarr) // item is object and newarr is arr
        setarr(newarr)
    }
    return (
        < div className="d-flex flex-md-row  gap-md-3 gap-3 flex-column">
            <WatchList fun={modifyarr}/>
            <div  id="dashboardright">
                <Routes>
                <Route path="/" element={<Summary arr={arr}/> }/>
                <Route path="/dashboard" element={<Summary arr={arr}/>}/>
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/apps" element={<Apps />} />
                    <Route path="*" element={<NotFound />} />
                    </Routes>
            </div>
        </div>
    );
}
export default Dashboard;