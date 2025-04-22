import { useState,useEffect } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
   const [todos , settodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
  })
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, 
  [todos]) //after the declaration of func , the [todo] is a dependency array

  const addtodo = (text) =>{
    const tempobj = {
      id : crypto.randomUUID(),
      text : text,
      completed : false
    }
    settodos([...todos , tempobj])
  } 

  const deltodo =(id) =>{
    settodos(todos.filter((todo) => todo.id !== id))
  }

  const toggletodo = (id) => {
    settodos(todos.map((todo)=>{
      if(todo.id === id){
        return {...todo, completed : !todo.completed}
      } else{
        return todo
      }
    })) 
  }


  return (
    <>
    <div>
      <h2 className='mt-9 mb-14 text-gray-200 font-mono text-center text-3xl font-semibold '>📝 To-Do List 📝</h2>
    </div>
    <div>
      <ul className=''>
        {
          todos.map((todo) => (
            <TodoItem key = {todo.id} todo = {todo} toggletodo={toggletodo} />
          ))
        }
        
      </ul>
    </div>
    </>
  )
}

export default App
