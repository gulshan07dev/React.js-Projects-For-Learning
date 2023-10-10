import React from "react"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todo"

function App() { 
  return (
     <main className="bg-[#18181b] min-h-screen">
      <h1 className="text-5xl text-white">Todo App</h1>
      <AddTodo />
      <Todos />
     </main>
  )
}

export default App
