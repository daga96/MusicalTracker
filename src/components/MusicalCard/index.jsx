import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
const MusicalCard = ({ musical }) => {
  return (
    <div className=" bg-gray-500 rounded-lg relative group cursor-pointer">
      <img
        src={musical.image || ""}
        alt={musical.title}
        className="h-60 w-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex flex-col rounded-lg items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white text-center">
        <p className="text-lg font-bold">{musical.title}</p>
        <p>{musical.author}</p>
        <div className="flex flex-row">
          <button className="flex items-center justify-center rounded-full bg-yellow-500 w-10 h-10 mr-4 mt-10">
            <FaPlus />
          </button>
          <button className="flex items-center justify-center rounded-full bg-yellow-500 w-10 h-10 mt-10">
            <IoMdEye />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicalCard;
