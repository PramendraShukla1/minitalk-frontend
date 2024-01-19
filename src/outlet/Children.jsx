import React from 'react'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const Children = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Children