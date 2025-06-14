import Watchlistitemdisplay from "./Watchlistitemdisplay.jsx"
function WatchTable({watchlist , fun}) {
    return (
<div className="container">
  {watchlist.map((el) => (
   <Watchlistitemdisplay item={el} fun={fun}/>
))}
</div>

    )
}
export default WatchTable;