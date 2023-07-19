import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    if (currentNumber <= 99) {
      const interval = setInterval(() => {
        setCurrentNumber((prevNumber) => {
          if (prevNumber < 99) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [currentNumber]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        // Execute some code here when the scroll position is greater than 1000
        console.log("Scrolled beyond 1000px");
        setCurrentNumber(1); // Start the countdown when scrolled beyond 1000px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <p>{currentNumber}</p>
      {/* Your other JSX content */}
    </div>
  );
};

export default MyComponent;
