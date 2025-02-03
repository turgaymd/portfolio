
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
<div className="row">
<div className="reach-me col-md-4 col-12">
<a className="submit-btn " href="CV.pdf" download>  Download CV </a>

   


</div>
<div className="reach-me col-md-4 ">
         <a className="submit-btn" href="#contact"> Hire me</a> 
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