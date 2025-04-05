// src/components/WalletConnect.jsx
import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask first.");
        return;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);
    } catch (err) {
      console.error(err);
      alert("Wallet connection failed.");
    }
  };

  useEffect(() => {
    // Auto-connect if already connected
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length) setWalletAddress(accounts[0]);
      });
    }
  }, []);

  return (
    <>
      {walletAddress ? (
        <span className="text-sm text-green-400 truncate max-w-[160px]">
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </span>
      ) : (
        <button
          onClick={connectWallet}
          className="border px-4 py-2 rounded-lg border-white text-white hover:bg-white hover:text-black transition"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}
