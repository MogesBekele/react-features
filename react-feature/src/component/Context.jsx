import React, { createContext, useState } from "react";
import { useRef } from "react"; // Import useRef for the inputRef

export const AppContext = createContext(); // Keep this export if needed elsewhere

const Context = ({ children }) => {
   // the following are context for usestate component
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  // the following are context for useeffect component
    const [fetchData, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [seconds, setSeconds] = useState(0);
     // the following are context for useRef component

       const [editor, setEditor] = useState(null);
       const editorRef = useRef(null);
       const inputRef = useRef(null);

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

export default Context;
