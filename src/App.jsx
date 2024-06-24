import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <ToastContainer/>
    <Header/>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/create-product" element={<CreateProduct/>}/>
 <Route path="/login" element={<Login/>}/>
 </Routes>
    </>
  )
}

export default App
