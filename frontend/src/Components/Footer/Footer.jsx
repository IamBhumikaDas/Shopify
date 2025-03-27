import React from "react";
import './Footer.css'
import insta from "../Assests/instagram.png"
import fb from "../Assests/fb.png"
import twitter from "../Assests/twitter.png"
import logo from "../Assests/logo.png"


const Footer= ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
            {/* <i class="fa-brands fa-5x fa-shopify"></i> */}
            <img src={logo} alt="" />
                {/* <p>Shopify</p> */}

            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                {/* <i class="fa-brands fa-2x fa-instagram"></i> */}
                <img src={fb} alt="" />
                </div>
                <div className="footer-icons-container">
                {/* <i class="fa-brands fa-2x fa-facebook"></i> */}
                <img src={insta} alt="" />
                </div>
                <div className="footer-icons-container">
                {/* <i class="fa-brands fa-2x fa-whatsapp"></i> */}
                <img src={twitter} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright © 2025 - <span>Admin Bhumika Das </span> </p>
            </div>

        </div>
    )
}
export default Footer;


