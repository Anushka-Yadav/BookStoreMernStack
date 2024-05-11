import React from 'react'
import Home from './home/home'
import { Routes, Route } from 'react-router-dom'
import Courses from './course/Courses'
import SignUp from './components/SignUp'
import Contact from './components/Contact'


function App() {
  return (
    <div className='dark:bg-slate-800 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
