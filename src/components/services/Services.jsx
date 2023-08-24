import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div id="services">
      <div className="services">
        <div className="services-me reveal">
          <span className="opasity"> My Services</span>{" "}
          <span className="myser">My Services</span>
        </div>
        <div className="services-itme reveal ">
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            My services are Web Design, Web Developer, Youtuber
          </p>
          <div className="services-itmes">
            <div className="services-itmes1 reveal ">
              <div className="card-icon">
                <i class="fas fa-palette"></i>
              </div>
              <h3>Web Design</h3>
              <p>
                I can also create front-end web designs. I primarily use the
                Figma.com website for this.
              </p>
            </div>
            <div className="services-itmes2 reveal">
              <div className="card-icon">
                <i class="fas fa-file-code"></i>
              </div>
              <h3>Web Developer</h3>
              <p>
                My main field is Front-End and in this I can build websites
                using native coding
              </p>
            </div>
            <div className="services-itmes3 reveal">
              <div className="card-icon">
                <i class="fa-brands fa-youtube"></i>
              </div>
              <h3>Youtuber</h3>
              <p>
                I upload video clips related to programming based on my
                interests on my YouTube channel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
