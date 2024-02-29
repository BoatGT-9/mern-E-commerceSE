import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Main = () => {
  return (
    <div>
    <Navbar>Navbar</Navbar>
    <Outlet/>
    <Footer>Footer</Footer>
    </div>
  )
}

export default Main
