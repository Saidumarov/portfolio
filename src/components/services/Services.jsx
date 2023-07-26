import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div id="services">
      <div className="services">
        <div className="services-me reveal">My Services</div>
        <div className="services-itme reveal ">
          <p style={{ textAlign: "center" }}>
            Mening xizmatlarim Web Design, Web Developer ,Youtuber
          </p>
          <div className="services-itmes">
            <div className="services-itmes1 reveal ">
              <div className="card-icon">
                <i class="fas fa-palette"></i>
              </div>
              <h3>Web Design</h3>
              <p>
                Men Front-End buyicha web-dizayin ham yarata olamn bunda men
                asosan Figma.com sayitidan foydalanamn.
              </p>
            </div>
            <div className="services-itmes2 reveal">
              <div className="card-icon">
                <i class="fas fa-file-code"></i>
              </div>
              <h3>Web Developer</h3>
              <p>
                Mening asosiy soham bu Front-End va bunda men mahalliy kodlash
                bilan veb-saytlarni yarata olaman.
              </p>
            </div>
            <div className="services-itmes3 reveal">
              <div className="card-icon">
                <i class="fa-brands fa-youtube"></i>
              </div>
              <h3>Youtuber</h3>
              <p>Men Youtubeda kanalimda o'zimning qiziqishlarim buyicha dasturlashga oid vedio-roliklar joylab boraman. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
