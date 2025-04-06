import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatorDashboard from "./pages/CreatorDashboard";
import SponsorDashboard from "./pages/SponsorDashboard";
import "./assets/logo.png"
import LogoSplash from "./components/logoSplash";
import AllSponsors from "./components/AllSponsors";



function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup  />} />
        <Route path="/CreatorDashboard" element={<CreatorDashboard  />} />
        <Route path="/SponsorDashboard" element={<SponsorDashboard  />} />
        <Route path="/allSponsors" element={<AllSponsors  />} />
      </Routes>
    </Router>
  );
}

export default App;
