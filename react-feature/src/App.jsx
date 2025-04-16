import React from 'react'
import Usestate from './component/usestate'
import UseEffect from './component/UseEffect'
import UseRef from './component/UseRef'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import UseMemo from './component/UseMemo'
import UseReducer from './component/useReducer'
import UseCallBack from './component/UseCallBack'
import UseLayout from './component/UseLayout'
import CustomHook from './component/CustomHook'


const App = () => {
  
  return (
    <div>
      <Navbar/>
      <Usestate />
      <UseEffect/>
      <UseRef/>
      <UseMemo />
      <UseReducer/>
      <UseCallBack/>
      <UseLayout/>
      <CustomHook/>
      <Footer/>
      
    </div>
  )
}

export default App
