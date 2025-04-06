import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-[Poppins] relative overflow-hidden">
          

      {/* Background Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-sm z-20 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          CollabVerse
        </h1>
        <ul className="flex space-x-6 text-white font-semibold">
          <li><button onClick={() => navigate("/")}>Home</button></li>
          <li><button onClick={() => navigate("/about")}>About</button></li>
          <li><button onClick={() => navigate("/features")}>Features</button></li>
          <li><button onClick={() => navigate("/signup")}>Sign Up</button></li>
        </ul>
      </nav>

      {/* Main Content */}
      {showMain && (
        <>
<main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-36 md:py-48 relative z-10">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="text-6xl md:text-7xl font-extrabold mb-8 text-white drop-shadow-lg"
  >
    Welcome to CollabVerse 🚀
  </motion.h2>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1 }}
    className="text-lg md:text-2xl max-w-3xl text-gray-200 mb-10 leading-relaxed"
  >
    A decentralized platform where creators and sponsors collaborate securely using Web3, smart contracts, and NFTs.
  </motion.p>

  <motion.button
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.4 }}
    onClick={() => navigate("/signup")}
    className="bg-purple-700 hover:bg-purple-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105"
  >
    Get Started
  </motion.button>
</main>

          {/* Features Section */}
          <section className="bg-black/30 backdrop-blur-md py-16 px-6 text-center border-t border-white/10">
            <h3 className="text-3xl md:text-4xl font-semibold mb-10 text-purple-300">
              Why CollabVerse?
            </h3>
            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {[
                { title: "Decentralized", desc: "No middlemen. Trustless smart contracts ensure fair deals." },
                { title: "NFT-Driven", desc: "Track collaborations and sponsorships with on-chain NFT records." },
                { title: "Secure Payments", desc: "Escrow and milestone-based payments powered by blockchain." },
                { title: "Global Reach", desc: "Collaborate with creators worldwide seamlessly." },
                { title: "Smart Analytics", desc: "Track performance with real-time analytics and reporting." },
                { title: "Community Driven", desc: "Join a vibrant ecosystem of innovators and supporters." },
              ].map(({ title, desc }, index) => (
                <motion.div
                  key={title}
                  whileHover={{ scale: 1.05, rotateY: 5, background: "linear-gradient(to right, #6a3093, #a044ff)" }}
                  whileTap={{ scale: 0.98, rotateY: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-6 rounded-2xl shadow-2xl border border-purple-700/40 backdrop-blur-lg cursor-pointer"
                >
                  <h4 className="text-xl font-bold mb-3 text-pink-400">{title}</h4>
                  <p className="text-gray-300 text-base leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

           {/* Footer */}
{/* Footer */}
<footer className="text-center py-5 border-t border-white/10 bg-black/20 backdrop-blur-md z-10">
  <div className="flex justify-center space-x-6 mb-4">
    {/* Twitter/X */}
    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-purple-400" title="Twitter">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 001.88-2.37 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.1 12.1 0 013 4.78a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.28 4.28 0 01-1.93.07 4.28 4.28 0 004.0 2.97A8.6 8.6 0 012 19.54a12.1 12.1 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z" />
      </svg>
    </a>

    {/* Discord */}
    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-purple-400" title="Discord">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M19.59 4.58l-2.1.6a14.8 14.8 0 00-3.5-1.4L14 3.2a14.9 14.9 0 00-4 .2L9.5 4.8a14.8 14.8 0 00-3.5 1.4l-2.1-.6a15 15 0 010 8.84l2.1-.6a14.8 14.8 0 003.5 1.4l.5 1.6a14.9 14.9 0 004-.2l.5 1.6a14.8 14.8 0 003.5-1.4l2.1.6a15 15 0 000-8.84zM9 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" />
      </svg>
    </a>

    {/* GitHub */}
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-purple-400" title="GitHub">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.755-1.333-1.755-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.236 1.839 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.604-2.665-.3-5.466-1.334-5.466-5.931 0-1.312.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.003 0C15.875 3.92 16.883 4.24 17.89 4.562c.653 1.653.242 2.873.118 3.176.77.84 1.233 1.909 1.233 3.221 0 4.61-2.805 5.625-5.475 5.92.43.371.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    </a>
  </div>
  <p className="text-sm text-gray-500">
    &copy; {new Date().getFullYear()} CollabVerse. Built with ❤️ for creators.
  </p>
</footer>

        </>
      )}
    </div>
  );
}
