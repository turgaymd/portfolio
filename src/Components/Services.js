import {AiOutlineMobile} from "react-icons/ai";
import {GrOptimize} from "react-icons/gr"
const Services=()=>{
    return(
        <div>
            <section id="services" className="text-center">
<h2>Services</h2>
<h4 className="text-center">What I'm Doing</h4>
<div className="container services_container">
 <article className="service">
 <div className="service_head"> 
<a ><ion-icon name="desktop-outline"></ion-icon></a>
<h5>Web Design</h5>
</div>
<ul><li>Building websites that are responsive</li>
<li>Design mobile-based features</li>
</ul>
</article>
<article className="service"> 
<div className="service_head"> 
<a ><ion-icon name="logo-android"></ion-icon></a>
<h5>Web Scraping</h5>
</div>
<ul>
    <li>Develop scripts to extract data </li>
    <li>Implement web scraping solutions </li>
</ul>
</article>
<article className="service">
<div className="service_head"> 
<a ><ion-icon name="trending-up"></ion-icon></a>
<h5>Search Engine Optimization</h5>
</div>
<ul>
    
 
        <li>Execute SEO strategies
            </li>
            <li>Performing bug fixes
            </li></ul>
</article>
</div>
            </section>
        </div>
    )
}
export default Services;