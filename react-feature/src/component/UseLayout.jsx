import React, { useState, useLayoutEffect, useRef } from "react";

const UseLayout = () => {
  const [boxSize, setBoxSize] = useState({});
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    // Measure the dimensions of the box
    const box = boxRef.current.getBoundingClientRect();
    setBoxSize({
      width: box.width,
      height: box.height,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">useLayoutEffect Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of the <span className="font-semibold">useLayoutEffect</span> hook in React. It is used to measure the dimensions of a DOM element before the browser repaints.
      </p>
      <div
        ref={boxRef}
        className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-64 h-32 flex items-center justify-center"
      >
        Resize Me!
      </div>
      <p className="text-lg mt-6">
        Box Dimensions:{" "}
        <span className="font-semibold">
          {boxSize.width} x {boxSize.height}
        </span>
      </p>
    </div>
  );
};

export default UseLayout;
