
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Account/Login'
import Register from '../Components/Account/Register'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        </Routes>
         
    </div>
  )
}

export default AllRoutes