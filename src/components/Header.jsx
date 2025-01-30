import React, { useState } from "react";
import { FaBell, FaSearch } from "react-icons/fa";
import { MdPerson, MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Message from "./Message";

const Header = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="flex items-center gap-4 md:gap-6">
        <img
          src={Logo}
          className="h-8 cursor-pointer"
          alt="Logo"
          onClick={() => navigate("/")}
        />
        <button className="hidden md:block text-sm font-bold text-black hover:bg-gray-200 py-2 px-4 rounded-full">
          Home
        </button>
        <button className="hidden md:block text-sm font-bold text-black hover:bg-gray-200 py-2 px-4 rounded-full">
          Create
        </button>
      </div>

      <div
        className={`flex-1 mx-4 ${
          isSearchOpen ? "block" : "hidden sm:flex justify-center"
        }`}
      >
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-8 py-2 border rounded-full focus:outline-none focus:ring focus:ring-red-300 text-sm hover:bg-gray-200"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-600">
        <FaSearch
          className="sm:hidden w-7 h-7 hover:bg-gray-200 p-1 rounded-full cursor-pointer"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        />
        <FaBell className="w-7 h-7 hover:bg-gray-200 p-1 rounded-full cursor-pointer" />
        <Message />
        <div className="flex items-center gap-2">
          <MdPerson
            onClick={() => navigate("/profile")}
            className="w-7 h-7 hover:bg-gray-200 p-1 rounded-full cursor-pointer"
          />
          <MdArrowDropDown className="w-7 h-7 hover:bg-gray-200 p-1 rounded-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
