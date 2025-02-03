import {AiOutlineMobile} from "react-icons/ai";
import {GrOptimize} from "react-icons/gr"
import { IoMdCode } from "react-icons/io";
const Services=()=>{
    return(
        <div>
            <section id="services">
<h2>Services</h2>
<h4 className="text-center">What I'm Doing</h4>
<div className="container services_container">
 <article className="service">
 <div className="service_head"> 
<a className="text-info"><ion-icon name="code-outline"></ion-icon></a>
<h5>Web Development</h5>
</div>
<ul><li>Building websites that are responsive</li>
<li>Integrating data from various back-end services and databases</li>

</ul>
</article>
<article className="service"> 
<div className="service_head"> 
<a ><ion-icon name="file-tray-full-outline"></ion-icon></a>
<h5>Web Scraping</h5>
</div>
<ul>
    <li>Develop scripts to extract data
    </li>
    <li>Implement web scraping solutions       
    </li>
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
            </ul>
</article>
</div>
            </section>
        </div>
    )
}
export default Services;