import React, { useState } from "react"; 
import { useTodoContext } from "../context/todoContext";

export default function TodoAdd() {
  const [value, setValue] = useState("");
  const { addTodo } = useTodoContext();

  const handleAddTodo = () => {
    if (value.trim() !== "") { 
      addTodo(value);
      setValue("");
    }
  };

  return (
    <div className="w-full flex items-center shadow-lg justify-between rounded-md overflow-hidden">
      <input
        className="bg-none border-none outline-none w-[calc(100%-50px)] sm:w-[calc(100%-100px)] py-2.5 px-3 sm:px-4 bg-white text-base sm:text-lg text-gray-700 font-[600]"
        type="text"
        placeholder="learn react"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="py-2.5 px-3 sm:px-4 w-[80px] sm:w-[100px] text-base sm:text-lg text-white bg-[#4e26ff] cursor-pointer hover:opacity-70"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
}
