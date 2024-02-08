import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
    <div>
    <Navbar>Navbar</Navbar>
    <Outlet/>
    <footer>Footer</footer>
    </div>
  )
}

export default Main