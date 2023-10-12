import React, { useState } from "react";
import TodoAdd from "./components/TodoAdd";
import { TodoProvider } from "./context/todoContext";
import Todo from "./components/Todo";
import { useTodoContext } from "./context/todoContext";
import { Toaster } from "react-hot-toast";

function App() {
  const { todos } = useTodoContext();

  return (
    <main className="bg-[#18181b] min-h-screen py-7 px-3">
      <section className="flex flex-col gap-10 items-center">
        <h1 className="text-5xl text-center text-white">Todo App</h1>
        {/* <TodoProvider> */}
          <div className="w-[95%] sm:w-3/4 md:w-2/3 flex flex-col gap-7">
            <TodoAdd />
            <div className="w-full flex flex-col gap-3">
              {todos ? (
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)
              ) : (
                <p className="text-white">no todo</p>
              )}
            </div>
          </div>
        {/* </TodoProvider> */}
      </section>
      <Toaster />
    </main>
  );
}

export default App;
