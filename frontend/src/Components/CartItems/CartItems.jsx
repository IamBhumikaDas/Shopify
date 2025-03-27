import React from "react";
import "./CartItems.css";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const CartItems= ()=>{
    
    const color ={color:" black"};
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);
    return(
        <div className="cartitems">

<div className="cartitems-format-main">
    <p>Products</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity</p>
    <p>Total</p>
    <p>Remove</p>
</div>
<hr/>
{all_product.map((e)=>{
    if(cartItems[e.id]>0){
        return <div>
        <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt="" className="carticon-product-icon" />
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className="cartitems-quantity">{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <i class="fa-solid fa-circle-xmark cart-items-remove-icon" style={color} onClick={()=>{removeFromCart(e.id)}}></i>
            
        </div>
        <hr/>
    </div>
    }
    return null;
})}
<div className="cart-items-down">
    <div className="cart-items-total">
        <h1>Cart totals</h1>
        <div>
            <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
<p>Shipping Fee</p>
<p>Free</p>
            </div>
            <hr></hr>
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
            </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
    <div className="cartitems-promocode">
        <p>If you have a promo code, Enter it here </p>
        <div className="cartitems-promobox">
            <input type="text" placeholder="promo code">
            </input>
            <button>Submit</button>
        </div>
    </div>
</div>

        </div>
    )
}
export default CartItems;


