 import React, { useContext, useState } from 'react'
 import './Navbar.css'


 import logo from '../Assets/logo.png'
 import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
 const Navbar = () => {


  const [menu ,setMenu] =useState("shop");
  const{getTotalCartItem}= useContext(ShopContext)
   return (
     <div className='navbar'>
      <div className='nav-logo'>

        <img src={logo} alt='logo'></img>
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li  onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration:'none' ,color:'black'}}>Shop</Link> {menu ==="shop" ?<hr/>: <></>} </li> 
        <li onClick={()=>{setMenu("mens")}}> <Link to='/mens' style={{textDecoration:'none' ,color:'black'}}>Men</Link>  {menu ==="mens" ?<hr/>: <></>} </li> 
        <li onClick={()=>{setMenu("womens")}}><Link to='/womens' style={{textDecoration:'none' ,color:'black'}}>Women </Link> {menu ==="womens"?<hr/>: <></>}</li> 
        <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' style={{textDecoration:'none' ,color:'black'}}>Kids</Link>  {menu=== "kids" ?<hr/>: <></>}  </li> 
      </ul> 
      <div className='nav-login-cart'>
       
        <Link to='/login'>
        <button>Login</button>
        </Link>
        <Link to='/cart'> <img src={cart_icon} alt="cart-icon"/></Link>
      <div className='nav-cart-count'>{getTotalCartItem()}</div>
        </div> 

         
     </div>
   )
 }
 
 export default Navbar