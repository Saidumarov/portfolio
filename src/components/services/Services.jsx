import React from "react";
import "./services.scss";

const Services = () => {
  return (
    <div id="services">
      <div className="services">
        <div className="services-me reveal">My Services</div>
        <div className="services-itme reveal ">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            molestias accusamus modi molestiae praesentium ipsam doloribus
            repudiandae, reiciendis nesciunt consectetur distinctio dignissimos,
            vel suscipit ipsum consequatur adipisci sed sint provident?
          </p>
          <div className="services-itmes">
            <div className="services-itmes1 reveal ">
              <div className="card-icon">
                <i class="fas fa-palette"></i>
              </div>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="services-itmes2 reveal">
              <div className="card-icon">
                <i class="fas fa-file-code"></i>
              </div>
              <h3>Web Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="services-itmes3 reveal">
              <div className="card-icon">
                <i class="fas fa-object-group"></i>
              </div>
              <h3>Youtuber</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
