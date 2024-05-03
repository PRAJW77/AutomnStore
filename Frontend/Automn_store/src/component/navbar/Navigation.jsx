import { Link } from "react-router-dom";
import React, { useContext, useState, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";
import logo from '../Images/logo_store.png'
import cart from '../Images/cart_icon.png'
import drop_down from '../Images/arrow_drop_down.png'
import "./Navbar.css"; // Import CSS file

const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const toggleMenu = (e) => {
        // setMenuVisible(!menuVisible);
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    // Function to handle menu click
    const handleMenuClick = (menuItem) => {
        setMenuVisible(false); // Close the menu after clicking a menu item
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>MENS-WEAR</p>
            </div>
            <img className="nav-dropdown" onClick={toggleMenu} src={drop_down} alt="" />
            <ul ref={menuRef} className={`nav-menu ${menuVisible ? 'nav-menu-visible' : ''}`}>
                <li onClick={() => handleMenuClick("Shop")}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                </li>
                <li onClick={() => handleMenuClick("Formals")}>
                    <Link style={{ textDecoration: 'none' }} to='/Formals'>Casuals</Link>
                </li>
                <li onClick={() => handleMenuClick("Sports")}>
                    <Link style={{ textDecoration: 'none' }} to='/Sports'>Sports</Link>
                </li>
                <li onClick={() => handleMenuClick("Casuals")}>
                    <Link style={{ textDecoration: 'none' }} to='/Casuals'>Product's</Link>
                </li>
            </ul>
            <div className="btnhome">
                {localStorage.getItem('token')
                ?<button onClick={()=>{localStorage.removeItem('token');window.location.replace('/')}}>Logout</button>
                :<Link to='/Login'><button>Login</button></Link>}
                <Link to='/Cart'><img src={cart} alt="cart" /></Link>
                <div className="cartcount">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};

export default Navigation;
