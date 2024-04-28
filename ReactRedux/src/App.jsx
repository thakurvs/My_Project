import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function App() {

  
  return (
    <>
      <div className='bg-purple-600 text-white text-2xl p-2 w-full'>React-Redux</div>
      <AddTodo />
      <TodoList />
    </>
  )
}

export default App
