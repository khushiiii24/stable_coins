import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("creator");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username && password) {
      alert("Login successful!");

      if (role === "creator") {
        navigate("/CreatorDashboard");
      } else {
        navigate("/SponsorDashboard");
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-3xl shadow-2xl p-10 text-white">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-400">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="creator">Creator</option>
              <option value="sponsor">Sponsor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-green-500 hover:bg-green-600 rounded-lg text-lg font-semibold transition duration-300"
          >
            Login
          </button>

          <div className="text-center mt-6">
            <p>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-400 hover:text-blue-500 underline"
              >
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
