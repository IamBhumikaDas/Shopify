import React from "react";
import './Footer.css'

const Footer= ()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
            <i class="fa-brands fa-5x fa-shopify"></i>
                <p>Shopify</p>

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
                <i class="fa-brands fa-2x fa-instagram"></i>
                </div>
                <div className="footer-icons-container">
                <i class="fa-brands fa-2x fa-facebook"></i>
                </div>
                <div className="footer-icons-container">
                <i class="fa-brands fa-2x fa-whatsapp"></i>
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Rights Reserved </p>
            </div>

        </div>
    )
}
export default Footer;


