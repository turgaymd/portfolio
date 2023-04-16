import {BsInstagram} from "react-icons/bs"
import {ImFacebook} from "react-icons/im"
import {FaLinkedinIn} from "react-icons/fa"
const Footer=()=>{

    return(
<footer>
    <a href="#" className="footer_logo">Turgay</a>
<div>
    <div className="footer_social">
<a className="text-white" href="https://www.facebook.com/turqay.memmedov.9480"><ImFacebook/></a>
<a className="text-white" href="https://www.instagram.com/turqay.mdv/"><BsInstagram/></a>
<a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a>

    </div>
<p className="footer_copyright">   © 2022 Portfolio - All Rights Reserved</p>
</div>

</footer>
    )
}
export default Footer;
