import React  from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar () {
    return(
        <nav className="navbar">
            <h3 className="logo">LOGO</h3>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/about" className="about">
                <li>About</li>
            </Link><Link to="/contactus" className="contactus">
                <li>Contactus</li>
            </Link>
            <Link to="/offers" className="offers">
                <li>Offers</li>
            </Link>
        </nav>
    )
}

export default Navbar;