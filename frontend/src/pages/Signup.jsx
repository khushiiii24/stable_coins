import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    wallet: "",
    password: "",
    role: "creator",
  });

  const handleSubmit = () => {
    if (formData.name && formData.username && formData.wallet && formData.password) {
      alert("Account Created Successfully!");
      navigate("/login");
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-400">Create Your CollabVerse Account</h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Wallet Address"
            value={formData.wallet}
            onChange={(e) => setFormData({ ...formData, wallet: e.target.value })}
            className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="p-3 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="flex gap-4 items-center mt-2">
            <label className="text-sm">I am a:</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="bg-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="creator">Creator</option>
              <option value="sponsor">Sponsor</option>
            </select>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 w-full bg-pink-700 hover:bg-pink-600 py-3 rounded font-semibold"
          >
            Sign Up
          </button>

          <p className="text-sm mt-4 text-center text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-purple-400 hover:underline cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
