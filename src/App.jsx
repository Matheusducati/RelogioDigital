import { useState } from 'react'
import './App.css'
import RelogioDigital from './RelogioDigital'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RelogioDigital/>
    </>
  )
}

export default App
