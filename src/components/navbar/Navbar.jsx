import "./nav.scss";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";

const Navbar = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Junior Front-End Developer.",
        " My goal become Full Stack developer.",
      ],
      typeSpeed: 50,
      startDelay: 500,
      backDelay: 1500,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // bar menyu
  const [isactiva , setActiva] = useState(false)
  const [isactiv , setActiv] = useState(false)
  const bar = () =>{
      setActiv(!isactiv)
      setActiva(!isactiv)
  }



     
     
  
  return (
    <div>
      <div className={`nav-bar ${isactiva ? 'active' : ''}`} >
              <ul>
                <div className="nav-hover" onClick={handleClick}>
                  <a style={{cursor:"pointer"}}> Home</a>
                  <div className="activ"></div>
                </div>
                <div className="nav-hover">
                  <a href="#about">About</a>
                  <div className="activ"></div>
                </div>
                <div className="nav-hover">
                  <a href="#skills">Skills </a>
                  <div className="activ1"></div>
                </div>
                <div className="nav-hover">
                  <a href="">Services </a>
                  <div className="activ2"></div>
                </div>
                <div className="nav-hover">
                  <a href="">Work </a>
                  <div className="activ1"></div>
                </div>
                <div className="nav-hover">
                  <a href="">Contact</a>
                  <div className="activ2"></div>
                </div>
              </ul>
              </div>
      <header>
        <nav>
          <div className="nav">
            <div className="nav1">
              <h1>Ja'farxon</h1>
              <ul>
                <div className="nav-hover" onClick={handleClick}>
                  <a style={{cursor:"pointer"}}> Home</a>
                  <div className="activ"></div>
                </div>
                <div className="nav-hover">
                  <a href="#about">About</a>
                  <div className="activ"></div>
                </div>
                <div className="nav-hover">
                  <a href="#skills">Skills </a>
                  <div className="activ1"></div>
                </div>
                <div className="nav-hover">
                  <a href="">Services </a>
                  <div className="activ2"></div>
                </div>
                <div className="nav-hover">
                  <a href="">Work </a>
                  <div className="activ1"></div>
                </div>
                <div className="nav-hover">
                  <a href="">Contact</a>
                  <div className="activ2"></div>
                </div>
              </ul>
              <div className={`bar1 ${isactiv ? 'active' : ''}`} onClick={bar}>
              <div className="barr" style={{ transition: ".4s" }}></div>
            <div className="barr" style={{ transition: ".2s" }}></div>
            <div className="barr" style={{ transition: ".4s" }}></div>
              </div>
              
            </div>
          </div>
        </nav>
        <div className="nav-itme ">
          <h2>Hello, I'm</h2>
          <h1>Saidumarov Ja'farxon </h1>
          <i>
            <span ref={el} className="ss" />
          </i>
          <button>SEE MY WORK</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
