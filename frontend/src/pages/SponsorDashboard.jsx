import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ethers } from "ethers";
import { motion } from "framer-motion";

export default function SponsorDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const sponsor = location.state?.sponsor || {
    name: "Unnamed Sponsor",
    username: "@unknown",
    description: "No description provided",
    amount: "0",
    wallet: "Not connected",
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        alert(`Wallet connected: ${address}`);
      } catch (err) {
        console.error("Wallet connection failed", err);
      }
    } else {
      alert("MetaMask not detected");
    }
  };

  const releasePayment = async () => {
    const contractAddress = "0xYourContractAddress";
    const abi = ["function releasePayment(uint256 sponsorshipId) public"];
    const sponsorshipId = 1;

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const tx = await contract.releasePayment(sponsorshipId);
      await tx.wait();
      alert("Payment released successfully!");
    } catch (err) {
      console.error("Error releasing payment", err);
    }
  };

  return (
    <div className="min-h-screen px-6 py-10 text-white bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] font-poppins relative overflow-hidden">
      {/* Gradient Glow Blobs */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 w-96 h-96 bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-32 w-96 h-96 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse" />
      </div>

      <header className="flex justify-between items-center mb-12 relative z-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 drop-shadow-md">
          💼 Sponsor Dashboard
        </h1>
        <div className="flex gap-4">
          <button
            onClick={connectWallet}
            className="bg-purple-600 hover:bg-purple-700 px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg"
          >
            Connect Wallet
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-600 px-5 py-2.5 rounded-xl transition-all duration-300 shadow-lg"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {[
          {
            title: "👤 Profile",
            content: (
              <>
                <p><strong>Name:</strong> {sponsor.name}</p>
                <p><strong>Username:</strong> @{sponsor.name?.toLowerCase().replace(/\s/g, "")}</p>
                <p><strong>About:</strong> {sponsor.description}</p>
                <p><strong>Planned Contribution:</strong> ${sponsor.amount}</p>
                <button className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg w-full transition-all duration-300">
                  Edit Profile
                </button>
              </>
            ),
          },
          {
            title: "📢 Post Sponsorship",
            content: (
              <>
                <p>Create new opportunities and offers for creators.</p>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg w-full transition-all duration-300">
                  New Sponsorship
                </button>
              </>
            ),
          },
          {
            title: "📬 Applications",
            content: (
              <>
                <p>You have 3 new collaboration requests.</p>
                <button className="mt-4 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-lg w-full transition-all duration-300">
                  View Applications
                </button>
              </>
            ),
          },
          {
            title: "🤝 Ongoing Deals",
            content: (
              <>
                <p>🎬 NFT Promo with @johndoe - Milestone 2</p>
                <p>🎧 Web3 Music Collab - In Progress</p>
              </>
            ),
          },
          {
            title: "💸 Payments",
            content: (
              <>
                <p>Escrow Smart Contract Status</p>
                <button
                  onClick={releasePayment}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg w-full transition-all duration-300"
                >
                  Release Payment
                </button>
              </>
            ),
          },
          {
            title: "📝 Feedback",
            content: (
              <>
                <p>⭐ Rate your recent collaborators</p>
                <button className="mt-4 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg w-full transition-all duration-300">
                  Give Feedback
                </button>
              </>
            ),
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#2e2e57] via-[#3c3c6b] to-[#4a4a80] border border-purple-500/40 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-md hover:scale-[1.03] transition-transform duration-300"
          >
            <h2 className="text-xl font-bold mb-4 text-cyan-300 drop-shadow-sm">
              {card.title}
            </h2>
            <div className="text-sm space-y-1">{card.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
