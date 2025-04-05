import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold text-white">CollabVerse</h1>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-700 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-pink-700 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded"
          >
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl font-extrabold mb-4 text-purple-400">Welcome to CollabVerse 🚀</h2>
        <p className="text-lg max-w-xl mb-8 text-gray-300">
          A decentralized platform where creators and sponsors collaborate securely using Web3.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Get Started
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-pink-700 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow-lg"
          >
            Login
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} CollabVerse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
