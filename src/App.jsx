import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-stone-950 bg-stone-100 grid gap-4 p-4 grid-cols-[220px_1fr]'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default App
