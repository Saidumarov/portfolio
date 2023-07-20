import React, { useEffect, useState } from "react";

const React1 = () => {
  const [currentNumber, setCurrentNumber] = useState();
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [wiz, setWiz] = useState();

  useEffect(() => {
    const handleScroll = () => {
      if (!countdownStarted && window.scrollY > 1000) {
        setCountdownStarted(true);
        setWiz(75);
        setCurrentNumber(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, [countdownStarted]);

  useEffect(() => {
    if (countdownStarted && currentNumber <= 74) {
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
        <h3>React</h3> <h3>{currentNumber}%</h3>
      </div>
      <div className="react">
        <div className="react-inle" style={{ width: `${wiz}%` }}></div>
      </div>
    </div>
  );
};

export default React1;
