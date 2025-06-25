import {Link} from "react-router-dom";
import "../css/Navbar.css"

function Navbar(){
    return <div className="navbar">
        <div className="navbar-brand">
            <Link to="/">Auction House</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/auctions" className="nav-link">Auctions</Link>
        </div>

    </div>
}

export default Navbar