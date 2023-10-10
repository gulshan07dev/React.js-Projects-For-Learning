import React, { useState } from "react";
import { useTodoContext } from "../context/todoContext";
import { FaEdit, FaTrash, FaClock, FaCheck } from "react-icons/fa";

export default function Todo({ todo }) {
  const { removeTodo, updateTodo } = useTodoContext();
  const [isEditable, setIsEditable] = useState(false);
  const [editableVal, setEditableVal] = useState(todo.todo);

  function handleDelete(id) {
    removeTodo(id);
  }

  function handleUpdate(id) {
    updateTodo(id, { ...todo, todo: editableVal });
    setIsEditable(false);
  }

  function handleUpdateStatus(id) {
    updateTodo(id, { ...todo, isComplete: !todo.isComplete });
  }

  return (
    <div
      className={`bg-white w-full ${
        isEditable ? "py-3 px-3" : "py-2 px-2"
      } rounded-md flex justify-between items-center`}
    >
      {isEditable ? (
        <input
          type="text"
          value={editableVal}
          onChange={(e) => setEditableVal(e.target.value)}
          className="border-[1px] border-gray-500 py-1.5 px-2 w-full"
        />
      ) : (
        <div className="flex gap-2 flex-wrap w-[85%]">
          <input
            type="checkbox"
            defaultChecked={todo.isComplete}
            onChange={() => handleUpdateStatus(todo.id)}
          />
          <p className="text-base text-gray-800 "> {todo.todo}</p>
        </div>
      )}
      <div className="flex items-center justify-end pr-2 gap-2 w-[15%]">
        {isEditable ? (
          <>
            <button
              onClick={() => setIsEditable(false)}
              className="cursor-pointer text-red-500"
            >
              <FaClock />
            </button>
            <button
              onClick={() => handleUpdate(todo.id)}
              className="cursor-pointer text-blue-600"
            >
              <FaCheck />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditable(true)}
              className="cursor-pointer text-gray-600"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="cursor-pointer text-red-500"
            >
              <FaTrash />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
