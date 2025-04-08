import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <p className="text-lg text-gray-700">
        This is a simple React application using Tailwind CSS for styling.
      </p>


      <p className="text-lg text-green-400">
        Current count: {count}
     </p>
      <div className='flex gap-4'>
      <button className='bg-amber-700 text-white rounded-full px-6 py-2'  onClick={()=>setCount(count=> count+1)}>count</button>

      <button className='bg-amber-700 text-white rounded-full px-6 py-2 c' onClick={()=>setCount(count=> count-1)}>decrement</button>
      <button className='bg-amber-700 text-white rounded-full px-6 py-2' onClick={()=>setCount(0)}>reset</button>
      </div>
    </div>
  )
}

export default App
