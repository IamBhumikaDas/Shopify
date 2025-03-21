import React from "react";
import "./NewsLatter.css"

const NewsLatter = ()=>{
    return(
        <div className="newsLatter">
<h1>
    Get Exclusive offers on your email
</h1>
<p>Subscribe to our newletter and stay updated</p>
<div className="">
    <input type="email" placeholder="Your Email id"/>
    <button>Subscribe</button>  
</div>
        </div>
    )
}

export default NewsLatter;