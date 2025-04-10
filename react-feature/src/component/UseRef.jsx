import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
  const [inputRef, setInputRef] = useState(null);
  const [textAreaRef, setTextAreaRef] = useState(null);
  const [editor, setEditor] = useState(null);
const editorRef = useRef(null);


const handleRef = (e) => {
  // Access the input element using the ref

  const ref = e.editorRef.current.value
  setEditor(ref)
}




  return (
    <div>

      <h1 className="text-4xl font-bold mb-4">UseRef Example</h1>
      <p className="text-lg mb-4">
        The following is a simple useRef example using React and Tailwind CSS.
      </p>
      <div>
        <label htmlFor="input" className="block mb-2 text-lg font-semibold">Input:{editor}</label>
        <input
          type="text"
          id="input"
          ref={editorRef}
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />

      <button onClick={handleRef}></button>
      </div>
      

    </div>
  )
}

export default UseRef
