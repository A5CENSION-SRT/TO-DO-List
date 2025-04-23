import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare , faTrash} from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({todo ,toggletodo , deltodo}) => {
  return (
    <li className={`mt-2 list-none cursor-pointer transition duration-400 text-center text-2xl ${todo.completed ? "line-through text-gray-500" : "hover:text-blue-400 text-white"}` }>
    {todo.text}
    <span className="ml-4 transition duration-400" onClick={() => toggletodo(todo.id)}>
        {todo.completed 
          ? <FontAwesomeIcon icon={faCheckSquare } style={{color : "#22c55e" }} /> 
          : <FontAwesomeIcon icon={faSquare} />}
      </span>
      <span className="ml-4 transition duration-400" onClick={() => deltodo(todo.id)}>
      <FontAwesomeIcon icon={faTrash} style={{color: "#e53e3e "}} />
      </span>
    </li>
  )
}

export default TodoItem
