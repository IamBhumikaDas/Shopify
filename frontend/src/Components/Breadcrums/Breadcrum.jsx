import React from "react";
import './Breadcrum.css'

const Breadcrum= (props)=>{
    const {product} =props;
    return(
        <div className="breadcrum">
            HOME <i class="fa-solid fa-arrow-right"></i> SHOP <i class="fa-solid fa-arrow-right"></i> {product.category} <i class="fa-solid fa-arrow-right"></i> {product.name}

        </div>
    )
}
export default Breadcrum;


