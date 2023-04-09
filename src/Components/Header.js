import Home from "./Home";
import React, { useState } from "react";
import {FaBars} from "react-icons/fa"
import {MdClose} from "react-icons/md"
const Header=()=>{
const [isMobile,setIsMobile]=useState(false)
const [active,setActive]=useState(false)

return(
    <>
    <section className="navd">
    <nav className="navbar">
 <div className="logo">
  <h4>Turgay_<span>Mammadov</span></h4>
 </div>
 <div className="navbar_content">
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={()=>setIsMobile(false)}>
            <li><a href="#">Home</a></li>
         <li> <a href="#about" >About</a></li>  
          <li><a href="#services">Service</a></li>  
            <li><a href="#portfolio">Portfolio</a></li>
            {/* <li><a>Blog</a></li> */}
            <li ><a href="#contact">Contact</a></li>
           
        </ul>
        </div>
        <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>  
                {isMobile ? (
                  <MdClose/>
                ): (
                   <FaBars/>
                )}
            </button>


    </nav>

     <Home/>
     </section>
     </>
)
}
export default Header;