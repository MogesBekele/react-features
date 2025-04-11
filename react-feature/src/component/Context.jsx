import React, { createContext, useState } from "react";

export const AppContext = createContext(); // Keep this export if needed elsewhere

const Context = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [seconds, setSeconds] = useState(0);

  const value = {
    count,
    setCount,
    isDarkMode,
    setIsDarkMode,
    name,
    setName,
    submittedName,
    setSubmittedName,
    fetchData,
    setFetchData,
    loading,
    setLoading,
    seconds,
    setSeconds,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default Context;
