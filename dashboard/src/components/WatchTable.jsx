import Watchlistitemdisplay from "./Watchlistitemdisplay.jsx"

function WatchTable({watchlist, fun, onDelete}) {
    return (
        <div className="container">
            {watchlist.map((el) => (
                <Watchlistitemdisplay key={el._id} item={el} fun={fun} onDelete={onDelete} />
            ))}
        </div>
    )
}

export default WatchTable;