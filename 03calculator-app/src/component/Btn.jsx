import React from "react";

export default function Btn({ name, onClick, className = "" }) {
   
  return (
    <button
    onClick={onClick}
      className={`bg-[#18181b] rounded-full hover:scale-105 h-16 w-16 text-xl text-gray-100 font-semi-bold shadow-[0_8px_24px_#0000002c] ${className}`}
    >
      {name}
    </button>
  );
}
