import React, { useEffect, useState } from "react";
import "./skills.scss";
import Css from "./Css";
import Sass from "./Sass";
import Js from "./Js";
import React1 from "./React";

const Skills = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [wiz, setWiz] = useState(false);
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  const [cx, setCx] = useState(79.9);
  const [cy, setCy] = useState(80);
  const [cxy, setCxy] = useState(72);

  useEffect(() => {
    const handleScroll = () => {
      if (!countdownStarted && window.scrollY > 1000) {
        setCountdownStarted(true);
        setWiz(true);
        setCurrentNumber(1);
      }
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [countdownStarted]);

  useEffect(() => {
    if (countdownStarted && currentNumber <= 89) {
      const interval = setInterval(() => {
        setCurrentNumber((prevNumber) => {
          if (prevNumber < 99) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            setCountdownStarted(false);
            return prevNumber;
          }
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [currentNumber, countdownStarted]);

  useEffect(() => {
    if (screenWidth <= 440) {
      setCx(65);
      setCy(65);
      setCxy(50);
    } else {
      setCx(79.9);
      setCy(80);
      setCxy(72);
    }
  }, [screenWidth]);

  return (
    <div id="skills">
      <div className="skills">
        <div className="skills-me reveal">
          <span className="opasity">My Skills</span>
          <span className="abs">My Skills</span>
        </div>
        <div className="skills-itme">
          <div className="skills-itmes1 reveal">
            <div className="html">
              <div className="skil">
                <div className="oute">
                  <div className="innner">
                    <p>{currentNumber}%</p>
                  </div>
                </div>
                <div className="blok">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColora">
                        <stop offset="0%" stopColor="#2c2c2c" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={cxy}
                      strokeLinecap="round"
                      className="cir"
                    />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#E45126" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx={cx}
                      cy={cy}
                      r={cxy}
                      strokeLinecap="round"
                      className={`circle ${wiz ? "active" : ""}`}
                    />
                  </svg>
                </div>
              </div>
              <p className="tex">Html</p>
            </div>
            <div className="css1">
              <Css />
            </div>
            <div className="sass">
              <Sass />
            </div>
            <div className="js">
              <Js />
            </div>
            <div className="react1">
              <React1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
