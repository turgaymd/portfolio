
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Test from './Components/Test';
import Testl from './Components/Testl';
import { useEffect, useState } from 'react';
function App() {
  const [darkMode,setDarkMode]=useState(false)
  useEffect(()=>{
    if(darkMode){
      document.body.classList.add("dark")
    }
    else{
      document.body.classList.remove("dark")
    }
  },[darkMode])
  return (
    <div className="App">
      {/* <button onClick={()=>setDarkMode(!darkMode)} className="btn btn-danger">Dark Mode</button> */}
      <Header/>
       <About/>
       <Services/>
       <Portfolio/>
       <Contact/>
       <Footer/>
       {/* <Test/>
       <Testl/> */}
    </div>
  );
}

export default App;
