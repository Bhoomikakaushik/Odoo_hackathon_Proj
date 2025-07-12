import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Homepage from './components/Homepage/Homepage.jsx'
import Login from './components/Login/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import SignupForm from './components/SignUp/Signup.jsx';
import InvitationCard from './components/InvitationCard.jsx/InvitationCard.jsx'

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
            <Route path='/Invitations' element={<InvitationCard/>}></Route>


            
            
          </Routes>
        </main>
      </div>
        
    </>
  )
}

export default App
