import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Header from "../components/Header";

const ProfilePage = () => {
  const savedImages = useSelector((state) => state.savedImages);

  const user = {
    name: "Meryem Uludağlı",
    followers: 967,
    following: 300,
    profileImage:
      "https://i.pinimg.com/736x/41/59/f2/4159f2ebd004f3ce5dd9da65bce9ccca.jpg",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-col items-center py-20 bg-white shadow-lg rounded-lg mx-4">
        <img
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
          src={user.profileImage}
          alt="Profile"
        />
        <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
        <div className="flex items-center mt-2 mb-4">
          <img
            className="w-5 h-5 mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
            alt="Pinterest"
          />
          <p className="text-gray-600 text-lg">meryemuludagli</p>
        </div>
        <div className="flex items-center mb-6">
          <p className="text-gray-900 text-lg font-semibold mr-4">
            {user.followers} Followers
          </p>
          <span className="text-gray-600">·</span>
          <p className="text-gray-900 text-lg font-semibold ml-4">
            {user.following} Following
          </p>
        </div>
        <button className="bg-gray-200 py-2 px-6 rounded-full text-lg font-semibold text-gray-900 mb-8 hover:bg-gray-300 transition">
          Edit Profile
        </button>
      </div>

      <div className="w-full max-w-7xl mt-12 mx-auto px-4">
        <h2 className="text-2xl font-bold text-red-500 mb-6">Saved</h2>

        {savedImages.length > 0 ? (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {savedImages.map((image, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.image}
                  alt={image.title || "Saved Image"}
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-gray-600 text-center text-lg">
            No content saved yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
