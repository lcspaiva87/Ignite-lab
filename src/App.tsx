import { useState } from 'react'
import './styles/global.css'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-bold text-5xl text-violet-500'>hello word</div>
      <button className='bg-violet-500 font-medium px-4 rounded'>
        Enviar
      </button>
    </>

  )
}

