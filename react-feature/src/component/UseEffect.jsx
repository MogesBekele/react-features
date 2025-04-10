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

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6">
      <h1 className="text-5xl font-bold mb-6 text-center">useEffect Example</h1>
      <p className="text-lg mb-8 text-center">
        This is a demonstration of the{" "}
        <span className="font-semibold">useEffect</span> hook in React, styled
        with Tailwind CSS.
      </p>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Data fetched from API:</h2>
        {loading ? (
          <p className="text-lg text-blue-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fetchData.slice(0, 10).map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 shadow-md bg-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg mt-8">
        <h2 className="text-2xl font-bold mb-4">Timer Example</h2>
        <p className="text-lg text-green-500">
          Seconds elapsed: <span className="font-bold">{seconds}</span>
        </p>
      </div>
    </div>
  );
};

export default UseEffect;
