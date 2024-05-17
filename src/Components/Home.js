

const Home=()=>{
return (
<header>
    <div className="container header_container mb-5">
        <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-6">
            <div className="typewriter">
        <p>Hey there ! </p>
    <h1>I am Turgay Mammadov</h1>
        </div>
    <h4 className="text_light">Front-end Developer</h4>
    <div className="primary_btn pb-3">
    <a className="btn btn-primary text-white" href="#portfolio">See my work</a>
    </div>
        </div>
       
        <div className="col-md-6">
<div className="me">
    <img src="admin.jpeg" className="img-fluid" alt="me"/>
</div>
    </div>
    </div>
    </div>
</header>
)

}
export default Home;