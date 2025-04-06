import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png"; // Adjust this path if needed

export default function LogoSplash() {
  const [scale, setScale] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setScale(true), 10); // animate quickly
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[#0D0D2B]">
      <img
        src={logo}
        alt="CollabVerse Logo"
        className={`w-40 h-40 transition-transform duration-600 ${
          scale ? "scale-600" : "scale-700"
        }`}
      />
    </div>
  );
}

