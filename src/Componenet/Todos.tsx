import { useSelector, useDispatch } from "react-redux";
import {removeTodo, Todo } from "../features/todoSlice";

const Todos = () => {
    const todos = useSelector((state :any) => state.todos)
    const dispatch = useDispatch();
     return(
        <>
        <div>TODOS
        </div>
        {todos.map((todo: Todo) => (
            <li key={todo.id}>
                {todo.title}
                <button onClick={()=> dispatch(removeTodo(todo.id))}>X</button>
            </li>
        ))}
        </>
     )
}
export default Todos;