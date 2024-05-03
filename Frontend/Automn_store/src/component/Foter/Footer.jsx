import React from "react";
import './Footer.css'
import insta from '../Images/instagram_icon.png'
import pinterest from '../Images//pintester_icon.png'
import whatsapp from '../Images/whatsapp_icon.png'
import logo from '../Images/logo_store.png'

const  Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>MENS-WEAR</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offieces</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;