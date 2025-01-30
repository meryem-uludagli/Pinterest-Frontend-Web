import React, { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <FaRegComment
        className="w-7 h-7 hover:bg-gray-200 hover:border hover:border-gray-600 hover:text-black p-1 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <IoClose
              className="w-6 h-6 text-gray-600 cursor-pointer hover:text-black"
              onClick={() => setIsOpen(false)}
            />
            <h3 className="text-lg font-bold">Inbox</h3>
            <BsThreeDots className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
          </div>

          <div className="border-t pt-2">
            <p className="text-sm text-gray-500">You have no new messages</p>
          </div>

          <div className="border-t mt-3 pt-3 text-sm">
            <p className="text-gray-700 font-medium">Invite your friends</p>
            <p className="text-gray-500">Connect to start chatting</p>
          </div>

          <button className="w-full mt-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
            Create new message
          </button>
        </div>
      )}
    </div>
  );
};

export default Message;
