import React, { useState } from "react";
import Work from "./Work";

import img1 from "../../assets/img/tt.png";
import img2 from "../../assets/img/uzum.png";
import img3 from "../../assets/img/logoo.png";
import img4 from "../../assets/img/tasb.png";
import img5 from "../../assets/img/1zum.png";
import img6 from "../../assets/img/ad1.png";
import img7 from "../../assets/img/calculator.png";
import img8 from "../../assets/img/poke.png";
import img9 from "../../assets/img/fut.png";
import img10 from "../../assets/img/git.png";
import img11 from "../../assets/img/ruy.png";
import img12 from "../../assets/img/qll.jpg";
import img13 from "../../assets/img/youtube.jpg";

const Workdata = () => {
  const data = [
    {
      id: 1,
      img: img13,
      link: "https://you-tube-demo.vercel.app/",
      a: `You Tube.uz`,
    },
    {
      id: 2,
      img: img2,
      link: `https://uzum-uz.netlify.app`,
      a: `Uzum-Market.uz`,
    },
    { id: 3, img: img3, link: `https://logo-uz.netlify.app`, a: `Logo.uz` },
    {
      id: 4,
      img: img12,
      link: `https://all-quranuz.netlify.app/`,
      a: `Al-Quran.uz`,
    },

    { id: 5, img: img5, link: `https://1zumda.netlify.app`, a: `1Zumda.uz` },
    {
      id: 6,
      img: img1,
      link: "https://todo-list-uzz.netlify.app",
      a: `Todo-List.uz`,
    },
    {
      id: 7,
      img: img4,
      link: `https://tasbehh-uz.netlify.app`,
      a: `Tasbeh.uz`,
    },
    {
      id: 8,
      img: img8,
      link: `https://pokemonn-uz.netlify.app`,
      a: `Pokemon.uz`,
    },
    { id: 9, img: img9, link: `https://futbol-uz.netlify.app`, a: `Futbol.uz` },
    {
      id: 10,
      img: img10,
      link: `https://git-uz.netlify.app`,
      a: `Githup-Search.uz`,
    },
    {
      id: 11,
      img: img11,
      link: `https://students-listuz.netlify.app`,
      a: `Talabalar-Ruyhati.uz`,
    },
    {
      id: 12,
      img: img7,
      link: `https://Calculator-uzz.netlify.app`,
      a: `Calculator.uz`,
    },
    { id: 13, img: img6, link: `https://adds-uz.netlify.app`, a: `Adds.uz` },
  ];

  const [visibleItems, setVisibleItems] = useState(6);

  const showMoreItems = () => {
    setVisibleItems(data.length);
  };

  const showLessItems = () => {
    setVisibleItems(6);
  };

  return (
    <div>
      <div id="work">
        <div className="work">
          <div className="work-me reveal">
            <span className="opasity"> My Work</span> My Work
          </div>
          <div id="ww">
            {data.slice(0, visibleItems).map((item) => (
              <Work key={item.id} {...item} />
            ))}
          </div>

          {visibleItems < data.length ? (
            <button className="but reveal" onClick={showMoreItems}>
              SEE ALL
            </button>
          ) : (
            <button className="but reveal" onClick={showLessItems}>
              SEE LESS
            </button>
          )}
          <div className="joy"></div>
        </div>
      </div>
    </div>
  );
};

export default Workdata;
