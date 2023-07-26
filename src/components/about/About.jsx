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
              <h2>
                Hey there! <div></div> <br />
                I'm Ja'farxon Saidumarov
              </h2>
              <p>
                Assalomu alaykum, men Saidumarov Ja'farxon, men veb-sayt
                yaratuvchiman, shu sohada endi tajriba oshiryapman, hozirda
                Junior Front-End dasturchiman kelajakda Back-Endni ham o'rganib
                Full Stack dasturchi bo'lmoqchiman.
                <br /> <br />
                Hozirda men 17 yoshdaman oilada 2 farzandman . IT sohasiga
                2022-yilda kirib kelganman va Ishtixon IT Akademyda 7-oy ichida
                Front-End sohasini real loyihalar asosida o'rgandim.
                <div className="abo"
                 
                >
           
                  <p><span style={{color:'#05364D'}}>Tug'ilgan kun: </span>2006-yil, 25 aprel</p>
                  <p className="abop1"> <span style={{color:'#05364D'}}>Yosh:</span> 17</p>
                </div>
                <div   className="abo">
                
               <p ><span style={{color:'#05364D'}}>Kanal:</span> https://t.me/jafarxon_blog</p>
               <p className="abop2"> <span style={{color:'#05364D'}}> Daraja:</span> Junior</p>
                </div>
              </p>
              <button>SEE MORE</button>
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
