import React from 'react'
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";

function Navbar() {
  return (
   <>
    <div><nav className="navbar navbar-expand-lg ">
    <a className="navbar-brand" href="#">EasyFood</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/Login">Home</Link> 
      </div>
      <div style={{display:"flex", marginLeft:"1000px"}}><Link className="nav-item nav-link" to="/Signup">Signup</Link> 
        <Link className="nav-item nav-link log" to="/Login">Login</Link> </div>
    </div>
  </nav></div>
   </>
  )
}

export default Navbar