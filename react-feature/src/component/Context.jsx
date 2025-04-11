import React, { createContext, useState, useRef } from "react";

// Create the context
export const AppContext = createContext();

// Context provider component
const AppContextProvider = ({ children }) => {
  // State for usestate component
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // State for useeffect component
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // State for useRef component
  const [editor, setEditor] = useState(null);
  const editorRef = useRef(null);
  const inputRef = useRef(null);

  // Context value to be shared
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
    editor,
    setEditor,
    editorRef,
    inputRef,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
