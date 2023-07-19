import React from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import "./index"
import Skills from "./components/skills/Skills";
// import NumberGenerator from "./components/skills/Nan";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills/>
      {/* <NumberGenerator/> */}
    </div>
  );
}

export default App;
