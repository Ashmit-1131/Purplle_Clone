
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
import Wishlist from '../Components/Cart/wishlist'
import Checkout from '../Components/Checkout/Checkout'


import Products from '../Products/Products'
import SkinProducts from "../Products/SkinProducts"
import Fragrance from "../Products/Fragrance"
import HairCare from "../Products/HairCare"
import Health from "../Products/Health"
import PersonalCare from "../Products/PersonalCare"
import BabyCare from "../Products/BabyCare"
import New from '../Components/New/New'
import Ayurvedha from "../Products/Ayurvedha"

import PrivateRoutes from './PrivateRoutes'

import ProductPage from '../Components/New/ProductPage'
import Payment from '../Components/Checkout/Payment'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
          
      

        <Route path="/cart" element={
        <PrivateRoutes>
           <Cart />
        </PrivateRoutes>
       } />

<Route path="/wishlist" element={
        <PrivateRoutes>
           <Wishlist />
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
      <Route path="/skinproducts" element={<SkinProducts/>} />
      <Route path="/hair" element={<HairCare/>} />
      <Route path="/fragrance" element={<Fragrance/>} />
      <Route path="/baby" element={<BabyCare/>} />
      <Route path="/health" element={<Health/>} />
      <Route path="/personal" element={<PersonalCare/>} />
      <Route path="/ayurvedha" element={<Ayurvedha/>} />


  <Route path="/offers/:id" element={<ProductCard/>}/>
  
  <Route path="/payment" element={<Payment />} />


 



        </Routes>
         
    </div>
  )
}

export default AllRoutes