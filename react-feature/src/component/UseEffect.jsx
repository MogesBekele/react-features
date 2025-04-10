import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);
  

  const fetchDataFromApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds >= 30) {
          clearInterval(interval); // Clear the interval after 30 seconds
          return prevSeconds; // Stop incrementing
        }
        return prevSeconds + 1;
      });
    }, 1000);

    // Cleanup function to clear the interval when the component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">UseEffect Example</h1>
      <p className="text-lg mb-4">
        The following is a simple useEffect example using React and Tailwind
        CSS.
      </p>
      <p className="text-lg text-green-500 mb-4">Data fetched from API:</p>
      {loading ? (
        <p className="text-lg text-blue-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {fetchData.slice(0, 10).map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 shadow-md bg-white"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold mb-4">Timer Example</h1>
        <p className="text-lg text-green-500 mb-4">
          Seconds elapsed: <span className="font-bold">{seconds}</span>
        </p>
      </div>
    </div>
  );
};



export default UseEffect;
