import React, { useContext, useEffect } from "react";
import { AppContext } from "./Context";

const UseEffect = () => {
  const { fetchData, setFetchData, loading, setLoading, seconds, setSeconds } =
    useContext(AppContext);

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
    <div id="useeffect" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white p-8 pt-26">
      <h1 className="text-5xl font-extrabold mb-8 lg:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        useEffect Example
      </h1>
      <p className="text-lg mb-10 lg:mb-6 text-center max-w-3xl">
        This is a demonstration of the{" "}
        <span className="font-semibold text-blue-400">useEffect</span> hook in
        React, styled with Tailwind CSS for a modern look.
      </p>
      <div className="bg-gray-100 text-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-6 lg:mb-4 text-center">
          Data fetched from API:
        </h2>
        {loading ? (
          <p className="text-lg text-blue-500 text-center">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fetchData.slice(0, 10).map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="bg-gray-100 text-gray-900 rounded-xl shadow-2xl p-8 w-full max-w-md mt-12 lg:mt-8">
        <h2 className="text-3xl font-bold mb-6 lg:mb-4 text-center">
          Timer Example
        </h2>
        <p className="text-lg text-green-500 text-center">
          Seconds elapsed: <span className="font-extrabold">{seconds}</span>
        </p>
      </div>
    </div>
  );
};

export default UseEffect;
