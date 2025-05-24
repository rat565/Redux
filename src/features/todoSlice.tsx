import { createSlice,nanoid } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const initialState = {
    todos: [
        { id: '1', title: "Learn React", completed: false },
    ] as Todo[],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                title: action.payload,
                completed: false,
            });
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});


export const {addTodo, removeTodo} = todoSlice.actions;// Export the actions to be used in components
// This allows components to dispatch actions to modify the state
export default todoSlice.reducer;  // Export the reducer to be used in the store
// This allows the slice to be used in the Redux store