import React, {createContext, useState, ReactNode} from "react";
import { Todo } from "../interfaces/Todo";
import { ContextType } from "../interfaces/ContextType";
import { TodoContextProviderProps } from "../interfaces/TodoContextProviderProps";

export const TodoContext = createContext<ContextType>({
    todos: [],
    setTodos: () => {},
    toggleTodo: () => {},
    deleteTodo: () => {},
})

export const TodoContextProvider: React.FC<TodoContextProviderProps> = ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const toggleTodo = (id: number) => {
        setTodos( prevTodos =>
            prevTodos.map(todo =>
                todo.id == id ? {...todo, state: !todo.state} : todo
            )
        )
    }

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return(
        <TodoContext.Provider value={{todos, setTodos, toggleTodo, deleteTodo}}>
            {children}
        </TodoContext.Provider>
    )
}