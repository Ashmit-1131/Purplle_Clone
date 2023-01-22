
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Account/Login'
import Register from '../Components/Account/Register'
import Homepage from '../Components/Homepage/Homepage'
import Product from '../Components/Homepage/Product'
// import Brands from '../Components/Brands/Brands'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          {/* <Route path='/' element={<Brands/>}/> */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/:id' element={<Product />} />
        </Routes>
         
    </div>
  )
}

export default AllRoutes