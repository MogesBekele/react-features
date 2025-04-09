import React from 'react'

const UseEffect = () => {
  // useEffect is a hook that allows you to perform side effects in function components.
  const [fetchData, setFetchData] = React.useState([])
  const [loading, setLoading] = React.useState(false)


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


 





  return (
    <div>
      
    </div>
  )
}

export default UseEffect
