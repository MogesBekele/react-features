import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
    >
      {children}
    </button>
  );
});

const UseCallBack = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const incrementOtherState = () => {
    setOtherState((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">useCallback Example</h1>
      <p className="text-lg mb-8 text-center">
        This is a demonstration of the <span className="font-semibold">useCallback</span> hook in React. It memoizes functions to prevent unnecessary re-renders of child components.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <p className="text-xl font-semibold mb-4">Count: {count}</p>
        <div className="flex space-x-4 mb-6">
          <Button handleClick={increment}>Increment</Button>
          <Button handleClick={decrement}>Decrement</Button>
        </div>
        <p className="text-xl font-semibold mb-4">Other State: {otherState}</p>
        <button
          onClick={incrementOtherState}
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-300"
        >
          Increment Other State
        </button>
      </div>
    </div>
  );
};

export default UseCallBack;
