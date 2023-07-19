import React, { useEffect, useState } from "react";
import "./about.scss";
import about from "../../assets/img/about1.jpg";
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
          <div className="about-me reveal">About Me</div>
          <div className="about-contenr">
            <div className="about-con-itme1 reveal">
              <img src={about} alt="" className="about-img" />
            </div>
            <div className="about-con-itme2 reveal">
              <h2>Hey there!  <div></div> <br />
               I'm Ja'farxon Saidumarov</h2>
              <p>
                Officiis, eos pariatur esse velit veritatis reiciendis cum quod
                possimus quas? Modi adipisci odit voluptatem tempora error
                perferendis quisquam, dolores iure, ullam id nam quaerat dolor
                incidunt, ratione aliquam deserunt eaque explicabo nostrum quo
                veniam expedita distinctio dolorem. Aspernatur consectetur eum.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Cumque corporis ullam deserunt debitis. Rerum
                necessitatibus accusantium, ipsa, officiis, eos pariatur esse
                velit veritatis reiciendis cum quod possimus quas? Modi adipisci
                odit voluptatem tempora error perferendis quisquam, dolores
                iure, ullam id nam
              </p>
              <button>SEE MORE</button>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`button ${isActive ? "active" : ""}`}
        onClick={handleClick}
      ><i class="fas fa-angle-up"></i></div>
    </div>
  );
}

export default About;

{
  /* <i class="fas fa-file-code"></i>
<i class="fas fa-palette"></i>
<i class="fas fa-object-group"></i>
<i class="fas fa-map-marker-alt"></i>
<i class="fas fa-phone"></i>
<i class="fas fa-envelope"></i>
<i class="fas fa-globe"></i>
<i class="fab fa-instagram"></i>
 */
}
