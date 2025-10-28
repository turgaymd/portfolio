
import About from "./Components/About";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Skills from './Components/Skill'
import Services from "./Components/Services"
import Portfolio from "./Components/Portfolio"
export default function Home() {
  return (
    <main>
       <Header/>
       <About/>
       <Services/>
       <Portfolio/>
       <Skills/>
       <Contact/>
       <Footer/>
    </main>
  );
}
