import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import "./index";
import Skills from "./components/skills/Skills";
import Workdata from "./components/work/Workdata";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";



function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Services />
      {/* <Workdata/>
      <Contact/> */}
    </div>
  );
}

export default App;
