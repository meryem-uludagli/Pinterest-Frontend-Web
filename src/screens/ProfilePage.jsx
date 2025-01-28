import React from "react";
import Header from "../components/Header";

const ProfilePage = () => {
  const user = {
    name: "Meryem Uludagli",
    followers: 967,
    following: 300,
    profileImage:
      "https://i.pinimg.com/736x/41/59/f2/4159f2ebd004f3ce5dd9da65bce9ccca.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center py-10 bg-white">
        <img
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
          src={user.profileImage}
          alt="Profile"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h1>
        <div className="flex items-center mb-4">
          <img
            className="w-5 h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="Pinterest"
          />
          <p className="text-gray-600 text-lg">meryemuludagli</p>
        </div>
        <div className="flex items-center mb-6">
          <p className="text-gray-900 text-lg font-semibold mr-2">
            {user.followers} Followers
          </p>
          <span className="text-gray-600">·</span>
          <p className="text-gray-900 text-lg font-semibold ml-2">
            {user.following} Following
          </p>
        </div>
        <button className="bg-gray-200 py-2 px-6 rounded-full text-lg font-semibold text-gray-900 mb-8">
          Edit Profile
        </button>
        <div className="grid grid-cols-2 gap-4 px-4 max-w-4xl mx-auto"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
