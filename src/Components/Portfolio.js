import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import { Nav,Tab,TabContainer} from 'react-bootstrap';
const Portfolio=()=>{
const [open, setOpen] = useState(false);
    return(
<section className="portfolio pt-5" id="portfolio">
<div className="portfolio-title text-center">
<h2>My Portfolio</h2>
<h4>Projects I've done</h4> 
</div>
<div className='portfolio-container container'>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='ecommerce.jpeg'/>
</div>
<div className='portfolio-links'>
<h6>Modern E-commerce </h6>
{/* <a href='https://github.com/turqay667/accessories.az' className='btn btn-success' target='_blank'>GitHub</a> */}
<a href="https://accessories-az.onrender.com/" target='_blank' className='btn'>Live Demo</a>
</div>

</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='forecast.jpeg'/>
</div>

<div className='portfolio-links'>
<h6>Weather Forecast</h6>
{/* <a href='https://github.com/turqay667/weather-app' className='btn btn-success'  target='_blank'>GitHub</a> */}
<a href="https://lastforecast.netlify.app/" className='btn' target='_blank'>Live Demo</a>
</div>
</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='chat_app.jpeg'/>
</div>

<div className='portfolio-links'>
<h6>Real-Time Chat </h6>
{/* <a href='https://github.com/turqay667/chat_app' className='btn btn-success'  target='_blank'>GitHub</a> */}
<a href="https://chat-app-bxnf.vercel.app/" className='btn' target='_blank'>Live Demo</a>
</div>
</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='tictac.jpeg'/>
</div>

<div className='portfolio-links'>
<h6>  TIC TAC TOE </h6>
{/* <a href='https://github.com/turqay667/tic-tac-toe' target='_blank' className='btn btn-success'>GitHub</a> */}
<a href="https://tic-tac-toe-jm6h.onrender.com/" className='btn' target='_blank'>Live Demo</a>
</div>
</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='note_app.jpeg'/>
</div>

<div className='portfolio-links'>
<h6>  Note Taking App </h6>
{/* <a href='https://github.com/turqay667/note-taking' target='_blank' className='btn btn-success'>GitHub</a> */}
<a href="https://note-taking-livid.vercel.app/" className='btn' target='_blank'>Live Demo</a>

</div>
</article>
<article className='portfolio-item'>
<div className='portfolio-img'>
<img src='advice.jpeg'/>
</div>

<div className='portfolio-links'>
<h6>  Advice Generator </h6>
{/* <a href='https://github.com/turqay667/advice_generator' target='_blank' className='btn btn-success'>GitHub</a> */}
<a href="https://turqay667.github.io/advice_generator/" className='btn ' target='_blank'>Live Demo</a>
</div>
</article>
</div>



</section>
    )
}
export default Portfolio;