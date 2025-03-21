import React, { useEffect, useState } from "react";
import "./Popular.css";

import Item from "../Items/Item.jsx";
const Popular = ()=>{

const [popularProducts,setPopularProducts] =useState([])

useEffect(()=>{
fetch('https://shopify-backend-0l0w.onrender.com/popularinwomen')
.then((response)=>response.json())
.then((data)=>setPopularProducts(data));

},[])

    return(
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr></hr>
            <div className="popular-items">
                {popularProducts.map((item,i)=>{
return( <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}  />)
                })}

            </div>

        </div>
    )
}
export default Popular;


