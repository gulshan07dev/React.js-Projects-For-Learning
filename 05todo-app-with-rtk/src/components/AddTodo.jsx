import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";
import toast from "react-hot-toast"

export default function AddTodo() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleAddTodo = () => {
    if (value.trim() !== "") {
      dispatch(addTodo(value));
      toast.success("added")
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
