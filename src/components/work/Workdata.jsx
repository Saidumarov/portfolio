import React from "react";
import img1 from "../../assets/img/fot.jpg";
import Work from "./Work";
const Workdata = () => {
  const data = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img1,
    },
    {
      id: 3,
      img: img1,
    },
    {
      id: 4,
      img: img1,
    },
    {
      id: 5,
      img: img1,
    },
    {
      id: 6,
      img: img1,
    },
  ];
  return (
    <div>
      <div id="work">
        <div className="work">
          <div className="work-me reveal">My Work </div>
          <div className="work-itme ">
            {data.map((itme, index) => (
              <Work key={index} {...itme} />
            ))}
          </div>
          <button className=" but reveal">SEE ALL</button>
          <div className="joy"></div>
        </div>
      </div>
    </div>
  );
};

export default Workdata;
