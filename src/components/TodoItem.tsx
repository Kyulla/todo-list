import {useContext} from "react";
import { TodoContext } from "./TodoContext";
import { Todo } from "../interfaces/Todo";
import { Delete, ChoiceButtons, Checked } from "./styled-components";

export default function TodoItem({todo}: {todo: Todo}){
    const { toggleTodo, deleteTodo } = useContext(TodoContext);
    return(
        <>
            <li>
                <ChoiceButtons onClick={() => toggleTodo && toggleTodo(todo.id)}>
                    <Checked state={todo.state}/>
                </ChoiceButtons>
                <ChoiceButtons onClick={() => deleteTodo && deleteTodo(todo.id)}>
                    <Delete />
                </ChoiceButtons>
                <span>
                    <h3 style={{display: "inline"}}>{todo.title}</h3>
                    <p>{todo.body}</p>
                </span>
            </li>
            <br/>
        </>
    )
}