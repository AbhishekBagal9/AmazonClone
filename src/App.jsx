import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Checkout from './Components/Checkout'
import './App.css'
const App = () => {
  return (
    <Router>
    <div>
    <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
       

    </div>
    </Router>
  )
}

export default App;