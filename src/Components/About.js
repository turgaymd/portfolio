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
<div className="about_me-img col-md-5 pb-5">
<img src="admin.jpeg"/>
<div className="line">
</div>
</div>
{/* <div className="col-md-1"></div> */}
<div className="about-info mb-5 col-md-7">
<p>
I am self-motivated and innovative Front-end Developer who is willing to go above in this position. Proficient in HTML, CSS, JavaScript, React and Node.js; plus modern libraries and frameworks. Passionate about usability and possess working knowledge of Git, SQL, and Adobe XD.
</p>
<div className="reach-me d-flex row gap-3">
<a className="submit-btn col-md-4" href="CV.pdf" download>Download CV</a>
</div>
</div>
</div>

         
            </div>
            </section> 
        </div>

    )
}
export default About;