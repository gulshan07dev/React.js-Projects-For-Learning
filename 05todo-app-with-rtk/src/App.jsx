import React from "react";
import {useSelector} from "react-redux"
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo"; 
import {Toaster} from "react-hot-toast"

function App() {
  const {todos} = useSelector((state) => state.todo);
  return (
    <main className="bg-[#18181b] min-h-screen py-7 px-3">
      <section className="flex flex-col gap-10 items-center">
        <h1 className="text-5xl text-center text-white">Todo App</h1>
        <div className="w-[95%] sm:w-3/4 md:w-2/3 flex flex-col gap-7">
          <AddTodo />
          <div className="w-full flex flex-col gap-3">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}

export default App;
