import React from "react";
import { createContext } from "react";

export const AppContext = createContext();
const Context = (props) => {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const value = {
    count,
    setCount,
    isDarkMode,
    setIsDarkMode,
    name,
    setName,
    submittedName,
    setSubmittedName,
  };
  return (
    <div>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </div>
  );
};

export default Context;
