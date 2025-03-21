import React from "react";
import './Offer.css'
import exclusive_image from '../Assests/exclusive_image.jpg'

const Offers = ()=>{
    return(
       
        <div className="offers">
<div className="offers-left">
<h1>Exclusive</h1>
<h1>offers for you</h1>
<p>ONLY ON BEST SELLERS PRODUCT</p>
<button>Check now</button>

</div>
<div className="offers-right">
    <img src={exclusive_image} alt=""/>

</div>
        </div>
       
    )
}
export default Offers;


