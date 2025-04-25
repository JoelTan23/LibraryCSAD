import React, { useEffect } from "react";
import "./Location.css";
import Navbar2 from "./components/Navbar2/Navbar2";
import { FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Location = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="location-container">
        <h2 className="location-title">VENUE LOCATION</h2>

        <div className="location-content">
          <div className="location-details">
            <h3 className="venue-name">Literary Haven</h3>

            <div className="location-item">
              <FaCalendarAlt className="icon" />
              <div>
                <p>
                  <strong>Monday to Sunday, Closed on Public Holidays</strong>
                </p>
                <p>8:00 am - 11:00 pm</p>
              </div>
            </div>

            <div className="location-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <p>
                  <strong>21 Jurong East Central, 1 Singapore 609732</strong>
                </p>
                <p>Address</p>
              </div>
            </div>

            <div className="location-item">
              <FaPhoneAlt className="icon" />
              <div>
                <p>
                  <strong>+65 1234 5678</strong>
                </p>
                <p>Phone Number</p>
              </div>
            </div>
          </div>
          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7387158549745!2d103.73692507401374!3d1.3329172986544546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1005faaaaaad%3A0xd95d8deabcaa9662!2sJurong%20Regional%20Library!5e0!3m2!1sen!2ssg!4v1738511796294!5m2!1sen!2ssg"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
