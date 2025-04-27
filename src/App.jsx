import { useState, useEffect } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import Todoinput from './components/Todoinput'
import Sidebar from './components/Sidebar'

function App() {
  const [todos, settodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos')
    return storedTodos ? JSON.parse(storedTodos) : []
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addtodo = (text) =>{
    const tempobj = {
      id: crypto.randomUUID(),
      text: text,
      completed: false
    }
    settodos([...todos, tempobj])
  } 

  const deltodo = (id) =>{
    settodos(todos.filter((todo) => todo.id !== id))
  }

  const toggletodo = (id) => {
    settodos(todos.map((todo)=>{
      if(todo.id === id){
        return { ...todo, completed : !todo.completed }
      } else{
        return todo
      }
    })) 
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 h-full pr-5 flex justify-center items-center rounded-r-4xl font-mono w-1/5 transition-all duration-500"
        style={{ backgroundColor: "#2E2E2F" }}
      >
        <Sidebar todos={todos} />
      </div>
      <div className="font-mono transition-all duration-500">
        <div className="flex flex-col justify-center pl-60">
          <div>
            <h2 className="mt-9 mb-14 text-gray-200 text-center text-3xl font-semibold">
              📝 To-Do List 📝
            </h2>
          </div>
          <div>
            <ul>
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  toggletodo={toggletodo}
                  deltodo={deltodo}
                />
              ))}
            </ul>
          </div>
          <div className="w-full max-w-lg text-center mx-auto mt-2 mb-2">
            <Todoinput addtodo={addtodo} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
