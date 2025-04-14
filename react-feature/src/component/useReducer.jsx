import React from 'react'

import { useReducer } from 'react'
let initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div id="usereducer" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white p-6 pt-26">
      <h1 className="text-4xl font-bold mb-6">useReducer Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of the{" "}
        <span className="font-semibold">useReducer</span> hook in React. It
        manages complex state logic in a more predictable way.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Count: {state}</h2>
        <div className="flex space-x-4">
          <button onClick={() => dispatch("increment")} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Increment</button>
          <button onClick={() => dispatch("decrement")} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">Decrement</button>
          <button onClick={() => dispatch("reset")} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300">Reset</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
