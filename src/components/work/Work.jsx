import React from "react";
import "./work.scss";

const Work = (itme) => {
  const { img } = itme;
  return (
    <div className="work-itmes reveal">
      <img src={img} alt="" />
    </div>
  );
};

export default Work;
