import { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [{ todo: "learn react", id: 1, isComplete: false }],
  addTodo: () => {},
  removeTodo: () => {},
  updateTodo: () => {}
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;