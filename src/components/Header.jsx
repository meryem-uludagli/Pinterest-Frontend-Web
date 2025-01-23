import React from "react";
import { FaBell, FaEnvelope } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import Logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b shadow-sm fixed w-full top-0 z-50">
      <div className="flex items-center gap-4">
        <img src={Logo} className="h-10" />
        <button className="text-sm font-semibold text-gray-700 hover:text-red-600">
          Ana Sayfa
        </button>
        <button className="text-sm font-semibold text-gray-700 hover:text-red-600">
          Oluştur
        </button>
      </div>

      <div className="flex items-center w-1/2">
        <input
          type="text"
          placeholder="Ara"
          className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring focus:ring-red-300 text-sm"
        />
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        <FaBell className="w-6 h-6 hover:text-red-600 cursor-pointer" />

        <FaEnvelope className="w-6 h-6 hover:text-red-600 cursor-pointer" />

        <MdPerson className="w-8 h-8 hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
