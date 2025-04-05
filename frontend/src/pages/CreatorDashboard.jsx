import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatorDashboard() {
  const navigate = useNavigate();

  const [creatorInfo, setCreatorInfo] = useState({
    name: "Jane Doe",
    username: "@creatorjane",
    wallet: "0xabc...123",
    bio: "I create Web3 content across music and art.",
  });

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.type === "creator") {
      setCreatorInfo(user);
    }
    // Trigger animation
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div
      className="min-h-screen px-6 py-10 text-white"
      style={{
        background: "linear-gradient(to bottom right, #1a1a2e, #16213e)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-indigo-400">🎨 Creator Dashboard</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Profile",
            content: (
              <>
                <p><strong>Name:</strong> {creatorInfo.name}</p>
                <p><strong>Username:</strong> {creatorInfo.username}</p>
                <p><strong>Wallet:</strong> {creatorInfo.wallet}</p>
                <p><strong>Bio:</strong> {creatorInfo.bio}</p>
                <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg">
                  Edit Profile
                </button>
              </>
            ),
          },
          {
            title: "Offers",
            content: (
              <>
                <p>You have 2 new sponsorship invites.</p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">
                  View Offers
                </button>
              </>
            ),
          },
          {
            title: "Portfolio",
            content: (
              <>
                <p>Showcase your top work and previous collaborations.</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                  Manage Portfolio
                </button>
              </>
            ),
          },
          {
            title: "Milestones",
            content: (
              <ul className="list-disc ml-4 text-sm">
                <li>🎯 NFT drop with Acme Sponsor - Milestone 2</li>
                <li>🎯 Social media promo - Awaiting Approval</li>
              </ul>
            ),
          },
          {
            title: "History",
            content: (
              <>
                <p>Completed 5 collaborations with 90% success rate.</p>
                <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg">
                  View History
                </button>
              </>
            ),
          },
          {
            title: "Feedback",
            content: (
              <>
                <p>🌟 “Great partner to work with!” - Sponsor X</p>
                <button className="mt-4 bg-yellow-600 hover:bg-yellow-700 px-4 py-2 rounded-lg">
                  See All Reviews
                </button>
              </>
            ),
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`bg-gray-800 rounded-xl p-6 shadow-md flex flex-col justify-between h-[260px] opacity-0 translate-y-4 transition-all duration-700 ease-out ${
              loaded ? "opacity-100 translate-y-0" : ""
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">{card.title}</h2>
            <div className="text-sm flex-grow">{card.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
