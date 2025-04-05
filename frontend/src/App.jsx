import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CreatorDashboard from "./pages/CreatorDashboard";
import SponsorDashboard from "./pages/SponsorDashboard";
import "./assets/logo.png"
import LogoSplash from "./components/logoSplash";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0D0D2B]">
        <LogoSplash />
      </div>
    )
  }

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
