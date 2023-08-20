import React, { useEffect, useState } from "react";
import "./skills.scss";
import Css from "./Css";
import Sass from "./Sass";
import Js from "./Js";
import React1 from "./React";
const Skills = () => {
  const [currentNumber, setCurrentNumber] = useState();
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [wiz, setWiz] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!countdownStarted && window.scrollY > 1000) {
        setCountdownStarted(true);
        setWiz(true);
        setCurrentNumber(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
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

  return (
    <div id="skills">
      <div className="skills">
        <div className="skills-me reveal">
       
          <span className="opasity">My Skills</span>
          <span className="abs">My Skills</span>
        </div>
        <div className="skills-itme">
          {/* <div className="skills-itmes reveal">
            <h2>
              My Skills and Experiences <div></div>
            </h2>
            <p>
              Front-End dasturchisi, men  Saidumarov Ja'farxo UI/UX foydalanuvchi interfeysi bilan
              veb-sahifalar yarata olaman , hozirda amolyat qilib tajribamdi oshirmoqdaman. Men jamoviy 
              ishlash va  Githupda ham 
              jamoviy ishlashdi tajribasiga egaman.

           
            </p>
            <button>SEE MORE</button>
          </div> */}
          <div className="skills-itmes1 reveal">
            <div className="html">
           
              <div class="skil">
                <div class="oute">
                  <div class="innner"><p>{currentNumber}%</p></div>
                </div>
                <svg
                  xmIns="http: //www.w.org/2000/svg"
                  version="1.1"
           
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stop-color="#E45126" />
                    </linearGradient>
                  </defs>
                  <circle cx="79.9" cy="80" r="72" stroke-linecap="round" className={`circle ${wiz ? "active" : ""}`} />
                </svg>
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
