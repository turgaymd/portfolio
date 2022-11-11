
import {BsInstagram} from "react-icons/bs"
import {ImFacebook} from "react-icons/im"
import {FaLinkedinIn} from "react-icons/fa"
const Home=()=>{
return (
<div>
    <section className="home d-flex align-items-center justify-content-center flex-column">
    <h2 className="text-white pt-3">I am Turgay Mammadov</h2>
    <h4 className="text-white pt-4">Front-end Developer</h4>
    <ul className="social-icons d-flex justify-content-center">

        <li><a className="text-white" href="https://www.facebook.com/turqay.memmedov.9480"><ImFacebook/></a></li>
        <li><a className="text-white" href="https://www.instagram.com/turqay.mdv/"><BsInstagram/></a></li>
        <li><a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a></li>
    </ul>
    </section>
</div>
)

}
export default Home;