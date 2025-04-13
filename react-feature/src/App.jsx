import React from 'react'
import Usestate from './component/usestate'
import UseEffect from './component/UseEffect'
import UseRef from './component/UseRef'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import UseMemo from './component/UseMemo'


const App = () => {
  const items = ["React", "JavaScript", "HTML", "CSS", "Node.js"];
  return (
    <div>
      <Navbar/>
      <Usestate />
      <UseEffect/>
      <UseRef/>
      <UseMemo items={items}/>
      <Footer/>
      
    </div>
  )
}

export default App
