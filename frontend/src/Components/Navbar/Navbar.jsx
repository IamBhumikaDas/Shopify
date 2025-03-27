import React, { useContext, useRef, useState } from "react";
import './Navbar.css';
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown from '../Assests/dropdown.png'

const Navbar =()=>{
    const [menu , setMenu] = useState("shop")
    const {getTotalCartItems}=useContext(ShopContext)
    const menuRef =useRef();

    const dropdown_toggle =(e)=>{
menuRef.current.classList.toggle('nav-menu-visible')
e.target.classList.toggle('open')
    }
    return(
        <div className="navbar">
            <div className="nav-logo">
                {/* <i onClick={dropdown_toggle} class="fa-brands fa-shopify fa-5x "></i>

               <h2 style={{fontFamily:"arial"}}>Shopify</h2>
                */}
                <img src={logo} onClick={dropdown_toggle} alt="" />
            </div>
           <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown}alt="" />
            <ul ref ={menuRef} className="nav-menu">
                <li onClick ={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'white'}} to='/'>Shop</Link>{menu==="shop"?<hr></hr>:<></>}</li>
                <li onClick ={()=>{setMenu("men")}} ><Link style={{textDecoration:'none', color:'white'}} to='/mens'>Men</Link>{menu==="men"?<hr></hr>:<></>}</li>
                <li onClick ={()=>{setMenu("women")}}><Link style={{textDecoration:'none', color:'white'}} to='/womens'>Women</Link> {menu==="women"?<hr></hr>:<></>}</li>
                <li onClick ={()=>{setMenu("kids")}}><Link style={{textDecoration:'none', color:'white'}} to='/kids'>Kids</Link> {menu==="kids"?<hr></hr>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
            :<Link to='/Login'><button>Login</button></Link> }
               
              {/* <Link to='/cart'><i class="fa-solid fa-cart-shopping fa-2xl  "></i></Link>  */}
              <Link to='/cart'><img src={cart_icon} alt=""></img></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
                
            </div>

        </div>
    )
}

export default Navbar;