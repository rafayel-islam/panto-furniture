import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import { CartProvider } from './Context/CartContext'

function App() {
  return (
    <CartProvider>
      <>
        <Navbar />
        <main className='min-h-screen'>
          <Outlet />
        </main>
        <Footer />
      </>
    </CartProvider>
  )
}

export default App
