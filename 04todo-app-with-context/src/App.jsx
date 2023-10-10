import React, { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import { TodoProvider } from "./context/todoContext";
import Todo from "./components/Todo";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [todos, setTodos] = useState([]);

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

  return (
    <main className="bg-[#18181b] min-h-screen py-7 px-3">
      <section className="flex flex-col gap-10 items-center">
        <h1 className="text-5xl text-center text-white">Todo App</h1>
        <div className="w-[95%] sm:w-3/4 md:w-2/3 flex flex-col gap-7">
          <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo }}>
            <TodoAdd />
            <div className="w-full flex flex-col gap-3">
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </div>
          </TodoProvider>
        </div>
      </section>
      <Toaster />
    </main>
  );
}

export default App;
