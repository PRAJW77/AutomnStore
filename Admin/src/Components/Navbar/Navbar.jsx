import React from "react";
import './Navbar.css'
import navlogo from '../../assets/logo_store.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () =>{
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={navlogo} alt=""/>
                <p>MENSSTORE</p>
            </div>
            <img src={navProfile} alt="" className="nav-profile" />
        </div>
    )
}

export default Navbar;