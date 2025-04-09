import React, { useEffect } from "react";
import { useState } from "react";
const UseEffect = () => {
  // useEffect is a hook that allows you to perform side effects in function components.
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);

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
    fetchDataFromApi();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold">UseEffect</h1>
      <p className="text-lg mt-2">
        The following is a simple useEffect example using React and Tailwind CSS
      </p>
      <p className="text-lg text-green-400">Data fetched from API:</p>

      {loading ? (
        <p className="text-lg text-green-400">Loading...</p>
      ) : (
        fetchData.map((item, index) => {
          <div key={index}>
            <ul>
              <li className="text-lg text-green-400">{item.title}</li>
            </ul>

           
          </div>;
        })
      )}
    </div>
  );
};

export default UseEffect;
