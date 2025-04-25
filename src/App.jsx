import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoanPage from "./Pages/LoanPage/LoanPage";
import Events from "./Pages/EventsPage/Events";
import MeetingRoom from "./Pages/MeetingRoomPage/MeetingRoom";
import Location from "./Pages/LocationPage/Location";
import CataloguesPage from "./Pages/CataloguesPage/CataloguesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Loan" element={<LoanPage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/MeetingRoomsBooking" element={<MeetingRoom />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Catalogues" element={<CataloguesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
