import React, { useState } from "react";

const Closure = () => {
  const [count, setCount] = useState(0);

  // Closure function to increment the count
  const createIncrementer = (step) => {
    return () => {
      setCount((prevCount) => prevCount + step);
    };
  };

  // Create increment and decrement functions using closures
  const increment = createIncrementer(1);
  const decrement = createIncrementer(-1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Closure Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of closures in JavaScript. The increment and
        decrement functions "remember" the step value passed to the outer
        function.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <p className="text-2xl font-bold text-center mb-4">
          Current Count: <span className="text-green-500">{count}</span>
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={increment}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg px-6 py-2 transition duration-300"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Closure;
