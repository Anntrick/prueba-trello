import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Home from './containers/Home/Home'
import List from './containers/List/List'
import Header from './components/Header/Header'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
