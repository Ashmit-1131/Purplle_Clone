
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Account/Login'
import Register from '../Components/Account/Register'
import Brands from '../Components/Brands/Brands.jsx'
import Offers from '../Components/Offers/Offers'
import Product from "../Components/Offers/Product"

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/brands' element={<Brands/>}/>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/offers/:id" element={<Product/>}></Route>
        </Routes>
         
    </div>
  )
}

export default AllRoutes