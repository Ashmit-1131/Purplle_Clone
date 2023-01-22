
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Account/Login'

import Register from '../Components/Account/Register'
import Homepage from '../Components/Homepage/Homepage'
import Product from '../Components/Homepage/Product'
// import Brands from '../Components/Brands/Brands'


import Brands from '../Components/Brands/Brands.jsx'
import Offers from '../Components/Offers/Offers'
import Product from "../Components/Offers/Product"
import Cart from '../Components/Cart/Cart'
import Checkout from '../Components/Checkout/Checkout'
import Products from '../Products/Products'

const AllRoutes = () => {
  return (
    <div>
        <Routes>

        <Route path="/login" element={<Login />} />

        <Route path='/' element={<Homepage />} />
        <Route path='/:id' element={<Product />} />

        <Route path="/offers" element={<Offers />}/>
        <Route path="/offers/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />


        </Routes>
         
    </div>
  )
}

export default AllRoutes