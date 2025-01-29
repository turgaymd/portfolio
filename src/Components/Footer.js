import {BsInstagram} from "react-icons/bs"
import {ImFacebook} from "react-icons/im"
import {FaAngleUp, FaGithub, FaLinkedinIn} from "react-icons/fa"
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
const Footer=()=>{
const [visible, setVisible]=useState(false)
const currentDate=new Date().getFullYear()
const handleScroll=()=>{
    if(window.scrollY>400){
        setVisible(true)
    }  
    else{
        setVisible(false)
    }
}
const scrollTop=()=>{
    window.scrollTo({
        top:0,
    })
}
useEffect(()=>{
    window.addEventListener("scroll",handleScroll)
})
    return(
<footer>
    <a href="#" className="footer_logo">Turgay</a>
<div>
    <div className="footer_social">
<a className="text-white" href="https://github.com/turqay667"><FaGithub/></a>
<a className="text-white" href="https://www.instagram.com/turqay.mdv/"><BsInstagram/></a>
<a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a>

    </div>
<p className="footer_copyright">   © {currentDate} Portfolio - All Rights Reserved</p>
</div>
<div >
{
    visible ? <FaAngleUp  fontSize={40} className="topbutton" onClick={scrollTop}/> : <div></div>
}

</div>
</footer>
    )
}
export default Footer;
