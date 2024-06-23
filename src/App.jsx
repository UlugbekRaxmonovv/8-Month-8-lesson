import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
 <Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/create-product" element={<CreateProduct/>}/>
 </Routes>
    </>
  )
}

export default App
