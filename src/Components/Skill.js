import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
const Skills=()=>{
    return(
        <div className="container"> 
            <section id="skills" className="text-center">
            <h2>Skills</h2>
            <h4 className="text-center"> My expertise</h4>
            <div className="row pb-4 pt-4">
            <div className="skill col-md-3 col-4">
            <a>
            <img src="js.png"/>
            </a>
          </div>
         
          <div className="skill col-md-3 col-4">
            <a>
            <img src="React.png"/>
            </a>
          </div>
          <div className="skill col-md-3 col-4">
            <a>
            <img src="Node.js.png"/>
            </a>
          </div> 
          <div className="skill col-md-3 col">
            <a>
            <img src="MongoDB.png"/>
            </a>
          </div>
          </div>
          <div className="row pt-4 pb-4">
          <div className="skill col-md-3 col-4">
            <a>
            <img src="Next.js.png"/>
            </a>
          </div>
          <div className="skill col-md-3 col-4">
            <a>
           <img src="tailwind.png"/>
            </a>
          </div>
       
          <div className="skill col-md-3 col-4">
            <a>
            <img src="Git.png"/>
            </a>
          </div>
          <div className="skill col-md-3 col-12">
            <a>
            <img src="Figma.png"/>
            </a>
          </div>
         
            </div>
            </section>
        </div>
    )
}
export default Skills;