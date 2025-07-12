import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Login from './components/Login/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignUp/Signup.jsx';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<SignupForm/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path='/Admindashboard' element={<AdminDashboard/>}></Route>
          </Routes>
        </main>
      </div>
        
    </>
  )
}

export default App
