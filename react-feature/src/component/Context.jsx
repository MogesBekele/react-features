import React from 'react'
import { createContext } from 'react'

const AppContext = createContext()
const Context = () => {

   const [count, setCount] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");
  return (
    <div>
   
    </div>
  )
}

export default Context
