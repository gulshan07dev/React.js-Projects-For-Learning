import React from "react";

export default function Navbar() {
  return (
    <nav className="md:h-[75px] h-[70px] flex items-center md:px-[30px] px-[15px] bg-white shadow-md sticky top-0">
      <header className="md:text-3xl text-xl text-gray-950 font-semibold">
        Tik Tak <span className="font-medium text-[#7a55ff]">Toe ❤</span>
      </header>
    </nav>
  );
}
