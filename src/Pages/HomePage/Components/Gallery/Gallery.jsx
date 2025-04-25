import React from "react";
import "./Gallery.css";
import { useNavigate } from "react-router-dom";
import events_1 from "../../assets/Events-1.png";
import events_2 from "../../assets/Events-1.png";
import events_3 from "../../assets/Events-1.png";
import events_4 from "../../assets/Events-1.png";
import white_arrow from "../../assets/white-arrow.png";

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Events");
  };

  return (
    <div className="gallery">
      <div className="events">
        <img src={events_1} alt="" />
        <img src={events_2} alt="" />
        <img src={events_3} alt="" />
        <img src={events_4} alt="" />
      </div>
      <button className="btn dark-btn" onClick={handleClick}>
        Discover More
        <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Gallery;
