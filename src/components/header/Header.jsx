import React from "react";
import "./Header.scss";

const Header = () => {

    return (
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand text-brand" style={{ fontSize: '3.2rem' }} href="index.html">Urban<span className="color-b">Housing</span></a>
            </div>
        </nav>
    )
}

export default Header;