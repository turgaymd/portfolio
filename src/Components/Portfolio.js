import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav,Tab,TabContainer} from 'react-bootstrap';
const Portfolio=()=>{
const [open, setOpen] = useState(false);
    return(
<section className="portfolio mt-5 mb-5" id="portfolio">
<div className="portfolio-title text-center">
<h2>My Portfolio</h2>
<h4>This is what demonstrates my knowledge</h4> 
<span className="bottom-line"></span>
</div>
<div className='portfolio-container container'>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='ecommerce.png'/>
</div>
<h4>E-commerce app</h4>
<div className='portfolio-links'>
<a href='https://github.com/turqay667/e-commerce'  className='btn btn-success' target='_'>GitHub</a>
<a href="https://accessories-az.onrender.com/" target='_blank' className='btn btn-primary'>Live Demo</a>
</div>

</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='forecast.png'/>
</div>
<h4>Weather App</h4>
<div className='portfolio-links'>
<a href='https://github.com/' className='btn btn-success'  target='_'>GitHub</a>
<a href="https://lastforecast.netlify.app/" className='btn btn-primary' target='_'>Live Demo</a>
</div>
</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='advice_generator.png'/>
</div>
<h4> Advice Generator App</h4>
<div className='portfolio-links'>
<a href='https://github.com/turqay667/advice_generator' target='_' className='btn btn-success'>GitHub</a>
<a href="https://turqay667.github.io/advice_generator/" className='btn btn-primary' target='_'>Live Demo</a>
</div>
</article>
</div>



</section>
    )
}
export default Portfolio;