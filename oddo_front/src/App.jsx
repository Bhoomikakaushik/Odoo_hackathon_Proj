import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx';
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
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<SignupForm/>}></Route>
          </Routes>
        </main>
      </div>
        
    </>
  )
}

export default App
