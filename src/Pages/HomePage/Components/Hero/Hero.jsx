import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import dark_arrow from "../../assets/direction-arrow.png";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/loan");
  };

  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Welcome Onboard!</h1>
        <p>This is your space for exploration, learning, and ideas.</p>
        <button className="btn" onClick={handleClick}>
          Start your journey here!
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
