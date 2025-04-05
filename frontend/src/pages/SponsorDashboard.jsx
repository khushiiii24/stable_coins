import React from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

export default function SponsorDashboard() {
  const navigate = useNavigate();

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
    <div
      className="min-h-screen px-6 py-10 text-white"
      style={{
        background: "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-green-400">💼 Sponsor Dashboard</h1>
        <div className="flex gap-4">
          <button
            onClick={connectWallet}
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg"
          >
            Connect Wallet
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Profile",
            content: (
              <>
                <p>Name: Acme Corp</p>
                <p>Username: @acmesponsor</p>
                <p>Wallet: 0x456...def</p>
                <p>About: Sponsor for Web3 creators in music, gaming, and NFTs.</p>
                <button className="mt-4 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg">
                  Edit Profile
                </button>
              </>
            ),
          },
          {
            title: "Post Sponsorship",
            content: (
              <>
                <p>Create new opportunities and offers for creators.</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
                  New Sponsorship
                </button>
              </>
            ),
          },
          {
            title: "Applications",
            content: (
              <>
                <p>You have 3 new collaboration requests.</p>
                <button className="mt-4 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-lg">
                  View Applications
                </button>
              </>
            ),
          },
          {
            title: "Ongoing Deals",
            content: (
              <>
                <p>🎬 NFT Promo with @johndoe - Milestone 2</p>
                <p>🎧 Web3 Music Collab - In Progress</p>
              </>
            ),
          },
          {
            title: "Payments",
            content: (
              <>
                <p>Escrow Smart Contract Status</p>
                <button
                  onClick={releasePayment}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg"
                >
                  Release Payment
                </button>
              </>
            ),
          },
          {
            title: "Feedback",
            content: (
              <>
                <p>⭐ Rate your recent collaborators</p>
                <button className="mt-4 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg">
                  Give Feedback
                </button>
              </>
            ),
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 p-6 rounded-2xl shadow-md backdrop-blur-md"
          >
            <h2 className="text-xl font-semibold mb-2 text-green-300">
              {card.title}
            </h2>
            {card.content}
          </div>
        ))}
      </div>
    </div>
  );
}
