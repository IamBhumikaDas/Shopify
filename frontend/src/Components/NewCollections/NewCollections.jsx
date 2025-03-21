import React, { useEffect, useState } from "react";
import './NewCollections.css'
import Item from "../Items/Item.jsx";

const NewCollections= ()=>{
   const [new_collection,setNew_collection] = useState([])
useEffect(()=>{
fetch('https://shopify-backend-0l0w.onrender.com/newcollections')
.then((response)=>response.json())
.then((data)=>setNew_collection(data))
},[])
    return(
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="colletions">
                {new_collection.map((item,i)=>{
                    return(<Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />)
                })}
                

            </div>

        </div>
    )
}
export default NewCollections;


