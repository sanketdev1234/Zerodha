import { useState, useEffect } from "react";
import WatchTable from "./WatchTable.jsx";
const url = "http://localhost:8080/getwatchlist";


function WatchList({ fun }) {
    const [linkactive, setlinkactive] = useState("1");
    const [watchlist, setwatchlist] = useState([]);
    const [displayedWatchlist, setDisplayedWatchlist] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const getdata = await fetch(url);
                const jsongetdata = await getdata.json();
                const initialWatchlist = jsongetdata.watchlist || [];
                setwatchlist(initialWatchlist);
                setDisplayedWatchlist(initialWatchlist.slice(0, 9));
            } catch (error) {
                console.error("Error fetching watchlist:", error);
                // Initialize with empty array if fetch fails
                setwatchlist([]);
                setDisplayedWatchlist([]);
            }
        }
        fetchData();
    }, []);

    
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/deletewatchlist/${id}`, {
                method: 'DELETE'
            });
            if (response) {
                console.log(response.status , response.statusText);
                // Update both watchlist states after successful deletion
                const updatedWatchlist = watchlist.filter(item => item._id !== id);
                setwatchlist(updatedWatchlist);
                setDisplayedWatchlist(updatedWatchlist.slice(0, 9));
            } else {
                console.error("Failed to delete item");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    const handleonclick = (val) => {
        const pageSize = 9;
        const startIndex = (val - 1) * pageSize;
        const newarray = watchlist.slice(startIndex, startIndex + pageSize);
        setlinkactive(val);
        setDisplayedWatchlist(newarray);
    };

    return (
        <div className="mt-5 py-5 border border-2 px-3 d-flex flex-column gap-3" id="watchlist">
            <select className="form-select form-select-lg mb-3" aria-label="Large select example">
                <option value="nifty50" selected>NIFTY 50</option>
                <option value="sensex">SENSEX</option>
                <option value="niftymidcap100">NIFTY MIDCAP 100</option>
                <option value="bankex">BANKEX</option>
                <option value="niftybank">NIFTY BANK</option>
                <option value="allcap">ALLCAP</option>
                <option value="nifty100">NIFTY 100</option>
                <option value="niftydivopps50">NIFTY DIV OPPS 50</option>
                <option value="niftycommodities">NIFTY COMMODITIES</option>
                <option value="niftyconsumption">NIFTY CONSUMPTION</option>
                <option value="niftyfinservice">NIFTY FIN SERVICE</option>
                <option value="nifty50pr2xlev">NIFTY50 PR 2X LEV</option>
                <option value="nifty50pr1xinv">NIFTY50 PR 1X INV</option>
                <option value="nifty50tr2xlev">NIFTY50 TR 2X LEV</option>
                <option value="nifty50tr1xinv">NIFTY50 TR 1X INV</option>
                <option value="niftyit">NIFTY IT</option>
            </select>
            <WatchTable watchlist={displayedWatchlist} fun={fun} onDelete={handleDelete} />
            <div className="container">
                <div className="row d-flex flex-row gap-2">
                    <a href="#" className="col-1 text-center text-decoration-none" onClick={() => handleonclick(1)} style={{ borderTop: linkactive == 1 ? "2px solid orange" : "1px solid white" }}>1</a>
                    <a href="#" className="col-1 text-center text-decoration-none" onClick={() => handleonclick(2)} style={{ borderTop: linkactive == 2 ? "2px solid orange" : "1px solid white" }}>2</a>
                    <a href="#" className="col-1 text-center text-decoration-none" onClick={() => handleonclick(3)} style={{ borderTop: linkactive == 3 ? "2px solid orange" : "1px solid white" }}>3</a>
                    <a href="#" className="col-1 text-center text-decoration-none" onClick={() => handleonclick(4)} style={{ borderTop: linkactive == 4 ? "2px solid orange" : "1px solid white" }}>4</a>
                    <a href="#" className="col-1 text-center text-decoration-none" onClick={() => handleonclick(5)} style={{ borderTop: linkactive == 5 ? "2px solid orange" : "1px solid white" }}>5</a>
                    <a href="#" className="col-1 text-center text-decoration-none" onClick={() => handleonclick(6)} style={{ borderTop: linkactive == 6 ? "2px solid orange" : "1px solid white" }}>6</a>
                </div>
            </div>
        </div>
    );
}

export default WatchList;