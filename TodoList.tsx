import React from 'react'
import {View} from 'react-native'
import Todo from "./Todo"
import {ITodo} from "./App"


interface IProps {
    todos:ITodo[];
    handleComplete:(arg:number) => void
    handleDelete:(arg:number) => void
}

const TodoList:React.FC<IProps> = ({todos,handleComplete,handleDelete}) => {
    
    const handleTodoDelete = (arg:number) => () => {
        handleDelete(arg)
    }
    const handleTodoComplete = (arg:number) => () => {
        handleComplete(arg)
    }
    const displayTodos = todos.map((todo,i) => (
        <Todo todo={todo} handleDelete={handleTodoDelete(todo.todoIndex)}
        key={todo.todoIndex} handleComplete={handleTodoComplete(todo.todoIndex)}
        />
    ))

    return(
        <View>
            {displayTodos}
        </View>
    )
}

export default TodoList