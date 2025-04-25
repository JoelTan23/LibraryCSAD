import React from "react";
import "./About.css";
import about_img from "../../assets/about_us_library.png";
import play_icon from "../../assets/play_icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about_img" />
        <img
          src={play_icon}
          alt=""
          className="play_icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>What we offer...</h2>
        <p>
          A cozy corner for curious minds. Whether you’re here to get lost in a
          book, work on a project, or just enjoy a quiet moment, you’ll find a
          warm, welcoming space to make your own. Settle in, explore, and let
          inspiration find you.
        </p>
        <p>
          Our collection is carefully curated to offer something for
          everyone—books, digital resources, and even community activities that
          bring people together. Whether you’re a lifelong reader, a student, or
          just someone looking for a peaceful spot to unwind, you’ll find a
          place that feels like home. We invite you to explore, relax, and make
          the library a part of your journey.
        </p>
      </div>
    </div>
  );
};

export default About;
