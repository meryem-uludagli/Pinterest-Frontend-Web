import React from "react";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-start h-full pl-16 pt-20">
        <div className="flex space-x-8">
          <span className="text-black text-xl font-medium underline">All</span>
          <span className="cursor-pointer text-gray-700 hover:text-black text-xl font-medium">
            Animals
          </span>
          <span className="cursor-pointer text-gray-700 hover:text-black text-xl font-medium">
            Tattoo
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
