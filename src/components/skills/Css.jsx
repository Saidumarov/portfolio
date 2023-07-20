import React, { useEffect, useState } from "react";
import "./skills.scss";
const Css = () => {
  const [currentNumber, setCurrentNumber] = useState();
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [wiz, setWiz] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (!countdownStarted && window.scrollY > 1000) {
        setCountdownStarted(true);
        setWiz(85);
        setCurrentNumber(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [countdownStarted]);

  useEffect(() => {
    if (countdownStarted && currentNumber <= 84) {
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
    <div>
      <div className="html-name">
        <h3>Css</h3> <h3>{currentNumber}%</h3>
      </div>
      <div className="css">
        <div className="css-inle" style={{ width: `${wiz}%` }}></div>
      </div>
    </div>
  );
};

export default Css;
