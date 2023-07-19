import React, { useEffect, useState } from "react";
import "./skills.scss";
const Skills = () => {
  // const [currentNumber, setCurrentNumber] = useState(1);

  // useEffect(() => {
  //   if (currentNumber <= 99) {
  //     const interval = setInterval(() => {
  //       setCurrentNumber((prevNumber) => {
  //         if (prevNumber === 1) {
  //           return 2;
  //         } else {
  //           return prevNumber + 1;
  //         }
  //       });
  //     }, 80);

  //     return () => clearInterval(interval);
  //   }
  // }, [currentNumber]);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [countdownStarted, setCountdownStarted] = useState(true);

  useEffect(() => {
    if (countdownStarted && currentNumber <= 89) {
      const interval = setInterval(() => {
        setCurrentNumber((prevNumber) => {
          if (prevNumber < 99) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            setCountdownStarted(false);
            // Set countdownStarted to false to indicate completion
            return prevNumber;
          }
        });
      }, 58);

      return () => clearInterval(interval);
    }
  }, [currentNumber, countdownStarted]);

  useEffect(() => {
    const handleScroll = () => {
      if (!countdownStarted && window.scrollY > 1500) {
        console.log("Scrolled beyond 1500px");
        setCurrentNumber(1);
        setCountdownStarted(true); // Set countdownStarted to true to start the countdown again
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [countdownStarted]);
  return (
    <div id="skills">
      <div className="skills">
        <div className="skills-me reveal">My Skills</div>
        <div className="skills-itme">
          <div className="skills-itmes reveal">
            <h2>
              My Skills and Experiences <div></div>{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button>SEE MORE</button>
          </div>
          <div className="skills-itmes1 reveal">
            <div className="html">
              <div className="html-name">
                <h3>HTML</h3> <h3>{currentNumber}%</h3>
              </div>
              <div className="html-itme">
                <div className="html-inle" ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
