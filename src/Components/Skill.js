import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
const Skills=()=>{
    return(
        <div className="container"> 
            <section id="skills" className="text-center">
            <h2>Skills</h2>
            <h4 className="text-center">This is what demonstrate my knowledge</h4>
          
            <div className="row">
            <div className="tools d-flex justify-content-center gap-3">
          <div className="skill">
            <a>
           <img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png"/>
            </a>
          </div>
          <div className="skill">
            <a>
            <FaReact/>
            </a>
          </div>
          <div className="skill">
            <a>
            <FaFigma/>
            </a>
          </div>
            </div>
            </div>
            </section>
        </div>
    )
}
export default Skills;