import React from 'react'
import './App.css'
import { LoadingProvider } from './context/LoadingContext';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'

function App() {
  return (
    <>
    <LoadingProvider>
        <ToastContainer
        
    
        autoClose={2000}
        
        />
           
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
       <Route path='/Login' element={<Signup/>}/>
      </Routes>
    </Router>
    </LoadingProvider>
    </>
  )
}

export default App