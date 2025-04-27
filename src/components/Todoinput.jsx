import React, { useState } from 'react'

const Todoinput = ({addtodo}) => {
  const [inputValue, setInputValue] = useState('');
  const handslesub = (e) => {
    e.preventDefault()
    if (inputValue.trim() === '') return 
    addtodo(inputValue)
    setInputValue('')
    }


  return (
    <div>
      <form onSubmit={handslesub} className='flex justify-center mt-4 gap-9'>
      <input type = "text" placeholder='Add a new task' className=' h-10 p-2 rounded-md text-center text-white' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      
      </form>
      </div>
  )
}

export default Todoinput
