
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Account/Login'

import Brands from '../Components/Brands/Brands.jsx'
import Cart from '../Components/Cart/Cart'
import Checkout from '../Components/Checkout/Checkout'
import Products from '../Products/Products'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
  
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/brands" element={<Brands />} />


        
        </Routes>
         
    </div>
  )
}

export default AllRoutes