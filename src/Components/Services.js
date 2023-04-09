import {AiOutlineMobile} from "react-icons/ai";
import {GrOptimize} from "react-icons/gr"
const Services=()=>{
    return(
        <div>
            <section id="services" className="text-center pt-5">
<h5 className="text-center">What I'm Doing</h5>
<h2>Services</h2>
<span className="bottom-line"></span>
<div className="container services_container">
 <article className="service">
 <div className="service_head"> 
<a className=""><ion-icon name="desktop-outline"></ion-icon></a>
<h4>Web Design</h4>
</div>
<ul><li>Building websites and apps that are responsive and usable.</li></ul>
</article>
<article className="service"> 
<div className="service_head"> 
<a className=""><ion-icon name="logo-android"></ion-icon></a>
<h4>Mobile Development</h4>
</div>
<ul>
    <li> Produce fully functional mobile applications writing clean code.</li>
</ul>
</article>
<article className="service">
<div className="service_head"> 
<a className=""><ion-icon name="trending-up"></ion-icon></a>
<h4>Search Engine Optimization</h4>
</div>
<ul>
    
    <li>Performing bug fixes and code reviews.
        </li>
        <li>Optimize applications for maximum speed.
            </li></ul>
</article>
</div>
            </section>
        </div>
    )
}
export default Services;