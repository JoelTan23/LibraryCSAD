import React, { useEffect, useState } from "react";
import { fetchBookings } from "../../api"; // Import API function
import "./MeetingRoom.css";

const MeetingRoom = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings().then((data) => setBookings(data)); // Fetch and set bookings
  }, []);

  return (
    <div>
      <h2>Room Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            <strong>User ID:</strong> {booking.user_id}, <strong>Room:</strong> {booking.room_type}, <strong>Booked At:</strong> {booking.booking_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingRoom;
