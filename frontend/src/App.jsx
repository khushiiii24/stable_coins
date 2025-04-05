import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatorDashboard from "./pages/CreatorDashboard";
import SponsorDashboard from "./pages/SponsorDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/CreatorDashboard" element={<CreatorDashboard />} />
        <Route path="/SponsorDashboard" element={<SponsorDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
