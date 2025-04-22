import React from 'react'

const TodoItem = ({todo ,toggletodo}) => {
  return (
    <li onClick={() => {
        toggletodo(todo.id)
    }}
    className={`mt-2 list-none cursor-pointer transition duration-200 text-center ${todo.completed ? "line-through text-gray-500" : "hover:text-blue-400 text-white"}` }>
    {todo.text}
    
    </li>
  )
}

export default TodoItem
