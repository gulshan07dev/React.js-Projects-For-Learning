import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [{ id: 1, todo: "learn react", isComplete: false }]
}

const todoSlice = createSlice({
    initialState,
    name: "todo",
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: new Date(), todo: action.payload, isComplete: false })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload.todo : todo)
        }
    }
})

export default todoSlice.reducer
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions