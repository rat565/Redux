import { useState } from 'react'
import './App.css'
import AddTodo from './Componenet/AddTodo'
import Todos from './Componenet/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
