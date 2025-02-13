import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { GoLink } from "react-icons/go";
import { FaGithub } from 'react-icons/fa';
import { Nav,Tab,TabContainer} from 'react-bootstrap';
const Portfolio=()=>{
const [filtered, setFiltered]=useState('all')

const projects=[
    {
        id:1,
        category:"Js",
        title:'Buta Grup - Company Website',
        desc:'I co-developed this website. Some changes were made later by others.',
        img:'butagrup.jpeg',
        live:'https://www.butagrup.com.tr/',
        
    },
    {
        id:2,
        category:"fullstack",
        title:'E-commerce',
        desc:'Modern E-commerce website built with MERN stack',
        img:'ecommerce.jpeg',
        live:'https://accessories-az.onrender.com/',
        github:'https://github.com/turqay667/accessories.az'
    },
    {
        id:3,
        category:"fullstack",
        title:'Chat Application',
        desc:'Real-time chat application using Socket.io and MERN stack',
        img:'chat_app.jpeg',
        live:'https://chat-app-bxnf.vercel.app/',
        github:'https://github.com/turqay667/chat_app'
    },
    {
        id:4,
        category:"react",
        title:'Weather Forecast',
        desc:'Weather forecast developed with React, OpenWeatherMap API.',
        img:'forecast.jpeg',
        live:'https://lastforecast.netlify.app/',
        github:'https://github.com/turqay667/weather-app'
    },
 
    {
        id:5,
        category:"react",
        title:'Note Taking',
        desc:'Note-taking website built with Next.js, TypeScript, and Tailwind CSS.',
        img:'note_app.jpeg',
        live:'https://note-taking-livid.vercel.app/',
        github:'https://github.com/turqay667/note-taking'

    },
    {
        id:6,
        category:"Js",
        title:'Tic Tac Toe',
        desc:'Tic Tac Tae game developed with  Tailwind CSS,Vanilla JS',
        img:'tictac.jpeg',
        live:'https://tic-tac-toe-jm6h.onrender.com/',
        github:'https://github.com/turqay667/tic-tac-toe'
    },
    // {
    //     id:"Js",
    //     title:'Advice Generator',
    //     img:'advice.jpeg',
    //     live:'https://turqay667.github.io/advice_generator/',
    //     github:'https://github.com/turqay667/accessories.az'
    // },
]

const filteringProjects = filtered==='all' ? projects : projects.filter(item=>item.category===filtered) 

    return(
<section className="portfolio" id="portfolio">
<div className="portfolio-title text-center">
<h2>My Portfolio</h2>
<h4>Projects I have worked on</h4> 
</div>
<div className='container'>
<ul className='nav nav-tabs' role='tabList'>
    <div className='d-flex '>
    <li className='nav-item' role='presentation'>
        <a className='nav-link active show' id="all"  aria-selected="true"  onClick={()=>setFiltered('all')}>All</a>
    </li>
    <li className='nav-item' role='presentation'>
        <a className='nav-link ' id="Js"  aria-selected="false" onClick={()=>setFiltered('Js')}>Vanilla JS</a>
    </li>
    <li className='nav-item' role='presentation'>
        <a className='nav-link ' id="react"  aria-selected="false" onClick={()=>setFiltered('react')}>React</a>
    </li>
    <li className='nav-item' role='presentation'>
        <a className='nav-link ' id="fullstack"  aria-selected="false" onClick={()=>setFiltered('fullstack')}>Full Stack</a>
    </li>
    </div>
  
</ul>
<div className='row pt-3' id="projects">
    {
       filteringProjects.map(item=>{
            return (
                <div className='col-md-4' key={item.id}>
<article className='portfolio-item mb-4'>
            <div className='portfolio-img'>
<img src={item.img} alt='project'/>
<h6 className='pt-3 pb-3'>{item.title} 
<p className='pt-3 desc'>{item.desc}</p>    
    </h6> 

<a href={item.live} target='_blank' className='btn'><GoLink/></a>
{/* <a href={item.github}  target='_blank' className='btn'><FaGithub /></a>  */}
</div>


            </article>
            </div>
            )
            
        })
    }
</div>
</div>
</section>
    )
}
export default Portfolio;