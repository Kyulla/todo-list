import {useContext, useEffect} from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "./TodoContext";
import { todoApi } from "./todoApi";

export default function TodoList(){
    const {todos, setTodos} = useContext(TodoContext);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
                const data = await todoApi();
                setTodos(data);
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData();
    }, [setTodos])

    if(!todos) return <h1>Caricamento...</h1>

    return(
        <div>
            <h2>Todo list</h2>
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}
