
import {FaGithub, FaHackerrank} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import { FiDownload } from "react-icons/fi";
const About=()=>{
    return(
        <div>
           <section id="about">
      
<h2>About Me</h2>
<h4>
Get To Know
</h4>
            <div className="container about_container">      
            <div className="about_me row"> 
<div className="about_me-img col-md-5">
<img src="admin.jpeg"/>
</div>
{/* <div className="col-md-1"></div> */}
<div className="about-info col-md-7">
    <h3>Front-end developer</h3>
<p className="">
Experienced front-end developer with a track record of delivering high quality web applications. I have demonstrated the ability to create user-friendly interfaces and optimize website performance.
 Ready to contribute to impact projects in the industry.


 Proficient in HTML, CSS, JavaScript, React and Node.js; plus modern libraries and frameworks.
 {/* Passionate about usability and possess working knowledge of Git, SQL, and Adobe XD. */}
</p>
<div className="reach-me d-flex row gap-3">
<a className="submit-btn col-md-4" href="CV.pdf" download><FiDownload fontSize={28}/>Download CV</a>
<div className="admin_social">
<a className="text-white" href="https://github.com/turqay667"><FaGithub /></a>
<a className="text-white" href="https://www.linkedin.com/in/turgay-mammadov-66011a1b2/"><FaLinkedinIn/></a>
<a className="text-white" href="https://www.hackerrank.com/profile/memmedovturqay81"><FaHackerrank /></a>
</div>
</div>
</div>
</div>

         
            </div>
            </section> 
        </div>

    )
}
export default About;