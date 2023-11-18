import React, { useState } from "react";
import "./Details.css";
import { images } from "./Helpers/DetailsData";
import Sidebar from "./Siebar";

function Details() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <>
     
     <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
         <p>Back</p>
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <p>forward</p>
        </div>
      </div>
    </div>
    </>
  
  );
}

export default Details;




















