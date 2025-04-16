import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'


function App() {

  return (
    <>
       <Navbar />
      <main className='min-h-screen'> 
        <Outlet />
      </main>
     <Footer />
    </>
  )
}

export default App
