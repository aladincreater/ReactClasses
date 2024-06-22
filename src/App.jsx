import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <div className='w-1/6 mr-6'>
        Psycho Maniac's Page
      </div>
      <div className='w-1/2'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
