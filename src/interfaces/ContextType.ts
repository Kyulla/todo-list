import { Todo } from "./Todo";

export interface ContextType{
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    toggleTodo?: (id: number) => void,
    deleteTodo?: (id: number) => void,
}