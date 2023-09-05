import React, { useState, useEffect } from "react";
import Icon from "../icon/icon";

export default function Card({ player, onPlay, index }) {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (player === "X") {
      setIcon(<Icon name={"cross"} />);
    } else if (player === "O") {
      setIcon(<Icon name={"circle"} />);
    } else {
      setIcon(<Icon />)
    }
  }, [player]);

  return (
    <div
      className="p-3 border-[1px] border-gray-400 shadow-sm text-3xl font-semibold text-gray-700 h-[100px] w-[100px] flex justify-center items-center hover:bg-violet-500 hover:text-white hover:border-none transition-all ease-in-out cursor-pointer"
      onClick={() => onPlay(index)}
    >
      {icon}
    </div>
  );
}
