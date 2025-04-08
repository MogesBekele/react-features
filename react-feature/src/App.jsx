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


      <p className="text-lg text-gray-700">
        Current count: {count}
     </p>
      
      <button onClick={()=>setCount(count=> count+1)}>count</button>
    </div>
  )
}

export default App
