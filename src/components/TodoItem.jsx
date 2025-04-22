import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({todo ,toggletodo}) => {
  return (
    <li className={`mt-2 list-none cursor-pointer transition duration-400 text-center text-2xl ${todo.completed ? "line-through text-gray-500" : "hover:text-blue-400 text-white"}` }>
    {todo.text}
    <span className="ml-4 transition duration-400" onClick={() => toggletodo(todo.id)}>
        {todo.completed 
          ? <FontAwesomeIcon icon={faCheckSquare} /> 
          : <FontAwesomeIcon icon={faSquare} />}
      </span>
    </li>
  )
}

export default TodoItem
