import React from 'react'

const Sidebar = ({ todos }) => {
  const uncompleted = todos.filter(todo => !todo.completed)
  const completed = todos.filter(todo => todo.completed)

  return (
    <div>
      <h3 className="text-xl font-semibold pb-2 mb-4">Tasks Overview</h3>
      <section className="mb-6">
        <h4 className="text-lg font-medium mb-2">Uncompleted Tasks</h4>
        {uncompleted.length > 0 ? (
          <ul className="list-none pl-5">
            {uncompleted.map(todo => (
              <li key={todo.id}>
                {todo.text.length > 10 ? todo.text.slice(0, 10) + " ..." : todo.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No uncompleted tasks</p>
        )}
      </section>
      <section>
        <h4 className="text-lg font-medium mb-2">Completed Tasks</h4>
        {completed.length > 0 ? (
          <ul className="list-none pl-5">
            {completed.map(todo => (
              <li key={todo.id}>
                {todo.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No completed tasks</p>
        )}
      </section>
    </div>
  )
}

export default Sidebar