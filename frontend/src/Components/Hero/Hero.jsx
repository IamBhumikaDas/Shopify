import React from "react";
import './Hero.css';
import hand_icon from "../Assests/hand.png"
//import arrow_icon from "../Assests/arrow_icon.webp"
import hero_image from "../Assests/hero.png"
const Hero =()=>{
    return(
        <div className="hero">
            <div className="hero-left">
<h2>New arrivals only</h2>
<div>
    <div className="hero-hand-icon">
        <p>New</p>
        <img src={hand_icon} alt=""/>
    </div>
    <p>collections</p>
    <p>for everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collections</div>
    
</div>
            </div>
<div className="hero-right">
    <img src={hero_image} alt="" />

</div>
        </div>
    )
}
export default Hero ;