import React from 'react'
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./coursesF/Courses";
import Signup from './Components/Signup';
import Contactus from "./contact/Contactus";


function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/course' element={<Courses/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/contact' element={<Contactus/>}/>
</Routes>
    </div>
    </>
  )
}

export default App
