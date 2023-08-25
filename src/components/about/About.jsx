import React, { useEffect, useState } from "react";
import "./about.scss";
import about from "../../assets/img/about.jpg";
function About() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsActive(window.scrollY > 500);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div id="about">
      <section>
        <div className="about">
          <div className="about-me reveal">
            <span className="opasity">About Me</span>{" "}
            <span className="ab">About Me</span>
          </div>
          <div className="about-contenr">
            <div className="about-con-itme1 reveal">
              <img src={about} alt="" className="about-img" />
            </div>
            <div className="about-con-itme2 reveal">
              <h2>
                <span className="hey"> Hey there!</span> <div></div> <br />
                I'm Ja'farxon Saidumarov
              </h2>
              <p>
                Hello, I am Saidumarov Ja'farxon. I am a website creator and I
                am currently gaining experience in this field. Currently, I am a
                Junior Front-End developer, and in the future, I want to learn
                Back-End as well to I want to be a Full Stack developer.
                <br /> <br />
                Now I am 17 years old and I am the second child in the family. I
                entered the IT field in 2022 and learned the Front-End field
                through real projects for 7 months at Istikhon IT Academy
                <div className="abo">
                  <p>
                    <span style={{ color: "#ffda60" }}>Birthday: </span>
                    2006-yil, 25 aprel
                  </p>
                  <p className="abop1">
                    <span style={{ color: "#ffda60" }}>Age:</span> 17
                  </p>
                </div>
                <div className="abo">
                  <p>
                    <span style={{ color: "#ffda60" }}>Channel:</span>
                    <a
                      href="https://t.me/jafarxon_blog"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      https://t.me/jafarxon_blog
                    </a>
                  </p>
                  <p className="abop2">
                    <span style={{ color: "#ffda60" }}> Degree:</span> Junior
                  </p>
                </div>
              </p>
              <button className="semo">SEE MORE</button>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`button ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <i class="fas fa-angle-up"></i>
      </div>
    </div>
  );
}

export default About;
