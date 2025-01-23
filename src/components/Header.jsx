import React from "react";
import { FaBell, FaRegComment, FaSearch } from "react-icons/fa";
import { MdPerson, MdArrowDropDown } from "react-icons/md";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="flex items-center gap-6">
        <img src={Logo} className="h-8" alt="Logo" />
        <button className="text-sm font-bold text-black hover:bg-gray-200 hover:border-2 hover:border-gray-600 hover:text-black py-2 px-4 rounded-full">
          Home
        </button>
        <button className="text-sm font-bold text-black hover:bg-gray-200 hover:border-2 hover:border-gray-600 hover:text-black py-2 px-4 rounded-full mr-3">
          Create
        </button>
      </div>

      <div className="flex items-center w-2/3">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-8 py-2 border rounded-full focus:outline-none focus:ring focus:ring-red-300 text-sm hover:bg-gray-200"
          />
          <FaSearch className="absolute left-3 top-2.5 text-gray-500 w-3.4 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-gray-600 relative">
        <div className="relative">
          <FaBell className="w-7 h-7 hover:bg-gray-200 hover:border hover:border-gray-600 hover:text-black p-1 rounded-full cursor-pointer" />

          <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white w-5 h-4.5 text-sm font-bold px-1 py-0 rounded-full">
            15
          </span>
        </div>
        <FaRegComment className="w-7 h-7 hover:bg-gray-200 hover:border hover:border-gray-600 hover:text-black p-1 rounded-full cursor-pointer" />
        <div className="flex items-center gap-2">
          <MdPerson className="w-7 h-7 hover:bg-gray-200 hover:border hover:border-gray-600 hover:text-black p-1 rounded-full cursor-pointer" />
          <MdArrowDropDown className="w-7 h-7 hover:bg-gray-200 hover:border hover:border-gray-600 hover:text-black p-1 rounded-full cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
