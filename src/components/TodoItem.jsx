import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faCheckSquare , faTrash} from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({todo ,toggletodo , deltodo}) => {
return (
    <li className={`mt-2 list-none  transition duration-400 text-center text-[20px] flex border-amber-50 border-2 rounded-[0.75rem] w-full max-w-lg mx-auto p-2 pl-5 pr-5 justify-between mb-6      ${todo.completed ? "line-through text-gray-500" : "hover:text-blue-400 text-white"}` }>
    {todo.text}
    <div className='padding-2 flex justify-between items-center'>
    <span className="ml-4 transition duration-400 justify-end" onClick={() => toggletodo(todo.id)}>
            {todo.completed 
                ? <FontAwesomeIcon icon={faCheckSquare} style={{color : "#22c55e" }} /> 
                : <FontAwesomeIcon icon={faSquare} />}
        </span>
        <span className="ml-4 transition duration-400" onClick={() => deltodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} style={{color: "#e53e3e "}} />
        </span>
        </div>
    </li>
)
}

export default TodoItem
