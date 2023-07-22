import "./nav.scss";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import navimg from "../../assets/img/about.jpg";

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
  const [isactiva, setActiva] = useState(false);
  const [isactiv, setActiv] = useState(false);
  const bar = () => {
    setActiv(!isactiv);
    setActiva(!isactiv);
  };

  const a = () => {
    setActiv(!isactiv);
    setActiva(!isactiv);
  };

  return (
    <div>
      <div className={`nav-bar ${isactiva ? "active" : ""}`}>
        <div className="nav-bar-img">
          <img src={navimg} alt="" />
        </div>
        <h3>Ja'farxon</h3>
        <ul>
          <div className="nav-hover" onClick={a}>
            <a href="#" onClick={a} style={{ cursor: "pointer" }}>
            <i class="fa-solid fa-house" style={{paddingRight:"15px"}}></i>   Home
            </a>
          </div>
          <div className="nav-hover" onClick={a}>
            <a onClick={a} href="#about">
            <i class="fa-solid fa-user" style={{paddingRight:"22px"}}></i>  About
            </a>
          </div>
          <div className="nav-hover" onClick={a}>
            <a onClick={a} href="#skills">
            <i class="fas fa-file-code" style={{paddingRight:"22px"}}></i>  Skills
            </a>
          </div>
          <div className="nav-hover" onClick={a}>
            <a onClick={a} href="#services">
            <i class="fa-solid fa-list" style={{paddingRight:"17px"}}></i>  Services
            </a>
          </div>
          <div className="nav-hover" onClick={a}>
            <a onClick={a} href="#work">
            <i class="fa-solid fa-tag" style={{paddingRight:"20px"}}></i>  Work
            </a>
          </div>
          <div className="nav-hover" onClick={a}>
            <a onClick={a} href="#contact">
            <i class="fa-solid fa-envelope" style={{paddingRight:"20px"}}></i> Contact
            </a>
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
                  <a style={{ cursor: "pointer" }}> Home</a>
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
                  <a href="#services">Services </a>
                  <div className="activ2"></div>
                </div>
                <div className="nav-hover">
                  <a href="#work">Work </a>
                  <div className="activ1"></div>
                </div>
                <div className="nav-hover">
                  <a href="#contact">Contact</a>
                  <div className="activ2"></div>
                </div>
              </ul>
              <div className={`bar1 ${isactiv ? "active" : ""}`} onClick={bar}>
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
