import React, { useState } from "react";
import Work from "./Work";

import img1 from "../../assets/img/ruy.png";
import img2 from "../../assets/img/uzum.png";
import img3 from "../../assets/img/logoo.png";
import img4 from "../../assets/img/tasb.png";
import img5 from "../../assets/img/1zum.png";
import img6 from "../../assets/img/ad1.png";

const Workdata = () => {
  const data = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img5 },
    { id: 8, img: img6 },
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
          <div className="work-me reveal">My Work</div>
          <div id="ww">
            {data.slice(0, visibleItems).map((item) => (
              <Work key={item.id} img={item.img} />
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
