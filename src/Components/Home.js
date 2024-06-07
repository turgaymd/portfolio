
import {FaGithub, FaHackerrank} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"

const Home=()=>{
return (
<div className="container">
    <div className="admin">
            <div className="typewriter">
    <h1>Hi, I'm <span className="text-info">Turgay Mammadov</span> </h1>
        </div>
    <h4 className="text_light">Front-end Developer</h4>
    <div className="admin_social">

<a className="text-white" href="https://www.hackerrank.com/profile/memmedovturqay81"><FaHackerrank /></a>
<a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a>
<a className="text-white" href="https://github.com/turqay667"><FaGithub /></a>


    </div>
    </div>
   
</div>
)

}
export default Home;