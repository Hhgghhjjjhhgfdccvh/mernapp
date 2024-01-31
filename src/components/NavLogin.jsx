import React,{useState} from 'react'
import { Bs2CircleFill } from 'react-icons/bs';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Modal from './Modal';
import Cart from './Cart';
import { useDispatchCart, useCart } from './ContextReducer'

function NavLogin() {
  let data=useCart();
const [cartView,setCartView]=useState(false)
  
  return (

   <>
    <div><nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="#">EasyFood</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      
      </div>
      <div style={{display:"flex", marginLeft:"1000px"}}> 
      <div style={{ 
  border: "none", 
  padding: "2px", 
  borderRadius: "5px", 
  backgroundColor: "white", 
  display: "flex", 
  alignItems: "center" 
}}>
  <div style={{ color: "green", marginRight: "1px", padding: "4px 8px", textDecoration: "none" }} onClick={()=>{setCartView(true)
  console.log(cartView)}}>
    MyCart
  </div>
  {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
  <div style={{color:"white", backgroundColor:"darkred",width:"20px",height:"20px", border:"none", borderRadius:"100%",display:"flex", justifyContent:"center",fontSize:"12px"}}>{data.length}</div>
</div>

 
        <Link  className="nav-item nav-link log" to="/Logout">LogOut</Link> </div>
    </div>
  </nav></div>
   </>
  )
}

export default NavLogin