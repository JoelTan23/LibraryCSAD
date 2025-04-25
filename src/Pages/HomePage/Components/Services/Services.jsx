import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
import services_img1 from "../../assets/people_library.png";
import services_img2 from "../../assets/meeting_rooms.png";
import services_img3 from "../../assets/location.png";
import services_icon_1 from "../../assets/Events.png";
import services_icon_2 from "../../assets/meeting_room_icon.png";
import services_icon_3 from "../../assets/location_icon.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <Link to="/Events">
          <img src={services_img1} alt="" />
          <div className="caption">
            <img src={services_icon_1} alt="" />
            <p>Upcoming Events</p>
          </div>
        </Link>
      </div>
      <div className="service">
        <Link to="/MeetingRoomsBooking">
          <img src={services_img2} alt="" />
          <div className="caption">
            <img src={services_icon_2} alt="" />
            <p>Meeting Rooms</p>
          </div>
        </Link>
      </div>
      <div className="service">
        <Link to="/Location">
          <img src={services_img3} alt="" />
          <div className="caption">
            <img src={services_icon_3} alt="" />
            <p>Locations</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
