import React, { useState, useLayoutEffect, useRef } from "react";

const UseLayout = () => {
  const [boxSize, setBoxSize] = useState({});
  const boxRef = useRef(null);
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    // Measure the dimensions of the box
    const box = boxRef.current.getBoundingClientRect();
    setBoxSize({
      width: box.width,
      height: box.height,
    });
  }, []);
  useLayoutEffect(() => {
    // Scroll the element into view
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div id="uselayout" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">useLayoutEffect Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        This is a demonstration of the <span className="font-semibold">useLayoutEffect</span> hook in React. It is used to measure the dimensions of a DOM element before the browser repaints.
      </p>
      <div
        ref={boxRef}
        className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-72 h-32 flex items-center justify-center"
      >
        Resize Me!
      </div>
      <p className="text-lg mt-6">
        Box Dimensions:{" "}
        <span className="font-semibold">
          {boxSize.width} x {boxSize.height}
        </span>
      </p>
      <h1 className="text-4xl font-bold mb-6 text-center">useLayoutEffect Scroll Example</h1>
      <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
        This example demonstrates how to use the <span className="font-semibold">useLayoutEffect</span> hook to scroll a specific element into view when the component renders.
      </p>
      <div className="space-y-8">
        <div className="h-64 bg-white text-gray-800 rounded-lg shadow-lg flex items-center justify-center">
          <p>Scroll down to see the highlighted section!</p>
        </div>
        <div className="h-64 bg-white text-gray-800 rounded-lg shadow-lg flex items-center justify-center">
          <p>Keep scrolling...</p>
        </div>
        <div
          ref={scrollRef}
          className="h-64 bg-yellow-400 text-gray-800 rounded-lg shadow-lg flex items-center justify-center"
        >
          <p className="text-xl font-bold">I am scrolled into view!</p>
        </div>
        <div className="h-64 bg-white text-gray-800 rounded-lg shadow-lg flex items-center justify-center">
          <p>More content below...</p>
        </div>
      </div>
    </div>
  );
};

export default UseLayout;
