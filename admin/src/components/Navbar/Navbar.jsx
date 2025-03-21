import React from "react";
import './Navbar.css'
//import navlogo from '../../assets/navlogo.png'
import navProfile from '../../assets/navprofile.png'
const Navbar =()=>{
  return(
    <div className="navbar">
        <i class="fa-brands fa-shopify fa-5x nav-logo ">
            
        </i>
        <img className="nav-profile" src={navProfile} alt="" />

    </div>
  )
}

export default Navbar