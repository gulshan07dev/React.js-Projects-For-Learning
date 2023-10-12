import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {},
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const addTodo = (value) => {
    const newTodo = {
      todo: value,
      id: new Date(),
      isComplete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    toast.success("Added");
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    toast.success("removed");
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prev) => (prev.id === id ? todo : prev)));
    toast.success("updated");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
