import React from "react";
import "./work.scss";

const Work = (itme) => {
  const { img, link, a, id } = itme;
  const isReveal =
    id === 1 || id === 2 || id === 3 || id === 4 || id === 5 || id === 6;

  return (
    <div className={`work-itmes ${isReveal ? "reveal" : ""}`}>
      <a href={link}>
        <img src={img} alt="" />
      </a>
      <div className="hover">
        <p>
          <i>
            <a href={link}>{a}</a>
          </i>
        </p>
      </div>
    </div>
  );
};

export default Work;
