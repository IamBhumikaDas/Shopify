import React from "react";
import './ProductDisplay.css';
import Product from "../../Pages/Product";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props)=>{
   const {product}=props;
   const {addToCart} = useContext(ShopContext);
  
    const color ={color:"yellow"};
   

    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplayright-star">
                
                <i class="fa-solid fa-star" style={color}></i>
                <i class="fa-solid fa-star" style={color}></i>
                <i class="fa-solid fa-star" style={color}></i>
                <i class="fa-solid fa-star" style={color}></i>
                <i class="fa-solid fa-star-half" style={color}></i>
                <p>(122)</p>

                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                Upgrade your wardrobe with our Classic Cotton Crew Neck T-Shirt, designed for both comfort and style. Made from 100% premium cotton, this t-shirt offers a soft, breathable, and lightweight feel, perfect for everyday wear.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
<button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
<p className="productdisplay-right-category">
    <span>Category :</span>  Women, T-Shirt,Crop Top
</p>
<p className="productdisplay-right-category">
    <span>Tags :</span>  Modern Latest
</p>
            </div>

        </div>
    )
}
export default ProductDisplay;