import React, { useEffect, useState } from "react";

const Js = () => {
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
      <div class="skil">
        <div class="oute">
          <div class="innner">
            <p>{currentNumber}%</p>
          </div>
        </div>
        <svg xmIns="http: //www.w.org/2000/svg" version="1.1">
          <defs>
            <linearGradient id="GradientColor3">
              <stop offset="0%" stop-color="#E3A324" />
            </linearGradient>
          </defs>
          <circle
            cx="79.9"
            cy="80"
            r="72"
            stroke-linecap="round"
            className={`circle4 ${wiz ? "active" : ""}`}
          />
        </svg>
      </div>
        <p className="tex">JavaScript</p>

    </div>
  );
};

export default Js;
