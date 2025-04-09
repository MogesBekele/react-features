import React, { useEffect } from 'react'
import { useState } from 'react'
const UseEffect = () => {
  // useEffect is a hook that allows you to perform side effects in function components.
  const [fetchData, setFetchData] = useState([])
  const [loading, setLoading] = useState(false)


  const fetchDataFromApi = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await response.json()
      setFetchData(data)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchDataFromApi()
  },[])


  return (
    <div>
      
    </div>
  )
}

export default UseEffect
