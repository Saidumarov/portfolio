import React, { useEffect, useState } from "react";
import "./skills.scss";
import Css from "./Css";
import Sass from "./Sass";
import Js from "./Js";
import React1 from "./React";
const Skills = () => {
  const [currentNumber, setCurrentNumber] = useState();
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [wiz, setWiz] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (!countdownStarted && window.scrollY > 1000) {
        setCountdownStarted(true);
        setWiz(90);
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
        <div className="skills-me reveal">My Skills</div>
        <div className="skills-itme">
          <div className="skills-itmes reveal">
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
          </div>
          <div className="skills-itmes1 reveal">
            <div className="html">
              <div className="html-name">
                <h3>Html</h3> <h3>{currentNumber}%</h3>
              </div>
              <div className="html-itme">
                <div className="html-inle" style={{ width: `${wiz}%` }}></div>
              </div>
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
