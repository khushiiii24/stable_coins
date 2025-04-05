import React from "react";

export default function ProfileCard({ creatorInfo }) {
  return (
    <>
      <p><strong>Name:</strong> {creatorInfo.name}</p>
      <p><strong>Username:</strong> {creatorInfo.username}</p>
      <p><strong>Wallet:</strong> {creatorInfo.wallet}</p>
      <p><strong>Bio:</strong> {creatorInfo.bio}</p>
      <button className="mt-4 btn">Edit Profile</button>
    </>
  );
}
