import WatchList from "./WatchList";
import Positions from "./Positions";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Funds from "./Funds";
import Apps from "./Apps";
import Summary from "./Summary";
import { Routes,Route} from "react-router-dom";
import NotFound from "./Notfound";
function Dashboard() {
    return (
        < div className="d-flex flex-md-row  gap-md-3 gap-3 flex-column">
            <WatchList/>
            <div  id="dashboardright">
                <Routes>
                <Route path="/" element={<Summary/>} />
                <Route path="/dashboard" element={<Summary/>}/>
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