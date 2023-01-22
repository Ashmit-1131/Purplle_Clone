
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Account/Login'

import Register from '../Components/Account/Register'
import Homepage from '../Components/Homepage/Homepage'
import Product from '../Components/Homepage/Product'



import Brands from '../Components/Brands/Brands.jsx'
import Offers from '../Components/Offers/Offers'
import ProductCard from "../Components/Offers/ProductCard"
import Cart from '../Components/Cart/Cart'
import Checkout from '../Components/Checkout/Checkout'

import Products from '../Products/Products'
import New from '../Components/New/New'

import PrivateRoutes from './PrivateRoutes'
import Register from '../Components/Account/Register'
import ProductPage from '../Components/New/ProductPage'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          
        <Route path="/" element={<HomePage/>}/>

        <Route path="/cart" element={
        <PrivateRoutes>
           <Cart />
        </PrivateRoutes>
       } />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/brands" element={<Brands />} />
          

              <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path='/' element={<Homepage />} />
        <Route path='/:id' element={<Product />} />
        <Route path="/brands" element={<Brands />}/>
        <Route path="/offers" element={<Offers />}/>

        <Route path="/new" element={<New />} />
        <Route
          path="/:_id"
          element={
              <ProductPage />
          }
        />

      <Route path="/products" element={<Products />} />
  <Route path="/offers/:id" element={<ProductCard/>}/>
 



        </Routes>
         
    </div>
  )
}

export default AllRoutes