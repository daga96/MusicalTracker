import React from "react";

const MusicalRow = ({ musical, index }) => {
  return (
    <div
      key={index}
      className="flex bg-gray-700 rounded-lg items-center mb-4 cursor-pointer h-20"
    >
      <img
        src={musical.image || ""}
        alt={musical.title}
        className="w-10 h-15 object-cover rounded-lg mr-4 transition-opacity duration-300"
      />
      <div className="flex flex-col">
        <p className="text-lg font-bold">{musical.title}</p>
        <p>{musical.author}</p>
      </div>
    </div>
  );
};

export default MusicalRow;
