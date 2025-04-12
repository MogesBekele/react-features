import React from 'react'
import Usestate from './component/usestate'
import UseEffect from './component/UseEffect'
import UseRef from './component/UseRef'
import Footer from './component/Footer'
import Navbar from './component/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Usestate />
      <UseEffect/>
      <UseRef/>
      <Footer/>
      
    </div>
  )
}

export default App
