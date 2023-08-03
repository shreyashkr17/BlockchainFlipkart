import { useState } from 'react'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css"
import Home from './components/Home'
import Search from './components/Search';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
