import Home from './home/Home';
import {Route,Routes} from "react-router-dom"
import Courses from './course/Courses';
import Signup from './components/Signup';
import Login from './components/Login';
// import React from 'react'
export default function App() {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </div>
    </>
  )
}
