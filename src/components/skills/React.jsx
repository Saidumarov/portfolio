import React, { useEffect, useState } from "react";

const React1 = () => {
  const [currentNumber, setCurrentNumber] = useState();
  const [countdownStarted, setCountdownStarted] = useState(false);
  const [wiz, setWiz] = useState();
  const [screenWidth, setScreenWidth] = useState(
    window.innerWidth || document.documentElement.clientWidth
  );

  const [cx, setCx] = useState(79.9);
  const [cy, setCy] = useState(80);
  const [cxy, setCxy] = useState(72);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [countdownStarted]);

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
            <linearGradient id="GradientColor4">
              <stop offset="0%" stop-color="#007EA8" />
            </linearGradient>
          </defs>
          <circle
            cx={cx}
            cy={cy}
            r={cxy}
            stroke-linecap="round"
            className="cir"
          />
        </svg>
        <svg xmIns="http: //www.w.org/2000/svg" version="1.1">
          <defs>
            <linearGradient id="GradientColor4">
              <stop offset="0%" stop-color="#007EA8" />
            </linearGradient>
          </defs>
          <circle
            cx={cx}
            cy={cy}
            r={cxy}
            stroke-linecap="round"
            className={`circle5 ${wiz ? "active" : ""}`}
          />
        </svg>
      </div>

      <p className="tex" id="rr">React</p>
    </div>
  );
};

export default React1;
