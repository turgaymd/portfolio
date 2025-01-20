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
<h5>Web Development</h5>
</div>
<ul><li>Building websites that are responsive</li>
{/* <li>Design mobile-based features</li> */}
<li>Integrating data from various back-end services and databases</li>
<li>Keep up with new technologies and industry trends, and use them in your work.</li>
</ul>
</article>
<article className="service"> 
<div className="service_head"> 
<a ><ion-icon name="analytics-outline"></ion-icon></a>
<h5>Web Scraping</h5>
</div>
<ul>
    <li>Develop scripts to extract data

    </li>

    <li>Implement web scraping solutions
        
    </li>
    <li> Ensure compliance with website policies and legal guidelines regarding data scraping.</li>
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
            </li>
            <li>
            Researching and implementing content recommendations for organic SEO success
            </li>
            </ul>
</article>
</div>
            </section>
        </div>
    )
}
export default Services;