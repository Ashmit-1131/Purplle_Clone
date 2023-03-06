import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {Button, Spinner} from "@chakra-ui/react"
import "./Product.css";

import { ADD_CARD_DATA } from '../../Redux/CartRedux/cart_action';
import { GetLocal } from '../../Utils/localstorage';
import Loading from '../Cart_acc_ext/Loading';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

const getData = async (id)=>{
    try{
      let res = await fetch(`https://backenddata-smtw.onrender.com/products?_id=${id}`)
      let data = await res.json();
      return data;
    }
    catch(err){
      console.log(err)
    }
}


const Product = () => {
    const params = useParams();
    const [product,setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [loading,setLoading] = useState(false);
    let id=params.id;
    // add to cart
    const [Load, setLoad] = useState(false);
    const Token = GetLocal("auth") || false;
    const navigate = useNavigate();
    const dispatch = useDispatch();
      // add to cart
      const handleCartClick = (image, price, name) => {
        setLoad(true);
        if (Token) {
          const data = {
            image,
            price,
            name,
          };
    
          dispatch(ADD_CARD_DATA(data)).then((res) => {
            swal({
              title: "Product added Successfully !",
              text: "",
              icon: "success",
              button: "ok",
            });
            setLoad(false);
          });
        } else {
          setLoad(false);
          swal({
            title: "You are Not Login  !",
            text: "Please Login Click ok",
            icon: "error",
            button: "ok",
          }).then(() => navigate("/login"));
        }
      };
    






    useEffect(()=>{
        fetchData(id)
      },[id])
    
      const fetchData = async (id)=>{
        try{
          setLoading(true)
          const data = await getData(id)
          setProduct(data)
          setLoading(false)
        }
        catch(err){
          console.log(err)
          setLoading(false)
        }
      }
      console.log(product)

      const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          quantity < 10 && setQuantity(quantity + 1);
        }
      };

      if(loading){
        return <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      }
  return (
    <div className='container'>
        <div className='image'>
            <img src={product[0]?.image} alt='product' />
        </div>
        <div className='details'>
          <h1>{product[0]?.name}</h1>
          <h3>{product[0]?.category}</h3>
          <div style={{display:"flex",gap:"5px"}}>
          <p style={{fontSize:"20px",fontWeight:"bolder"}}>₹ {product[0]?.discountPrice}</p>
          <p style={{textDecoration:"line-through",marginTop:"3px"}}>₹ {product[0]?.price}</p>
          </div>
          <div className='buttons'>
              <Button onClick={() => handleQuantity("dec")}>-</Button>
              <p style={{marginTop:"7px"}}>{quantity}</p>
              <Button onClick={() => handleQuantity("inc")}>+</Button>
          </div>
          <div className='cart-buttons'>
                <Button colorScheme='blue'
                    onClick={() =>
                      handleCartClick(product[0]?.image,product[0]?.price,product[0]?.name)
                    }>ADD TO CART</Button>
                <Button
                
                onClick={() =>
                  handleCartClick(product[0]?.image,product[0]?.price,product[0]?.name)}>Wishlist</Button>
          </div>
        </div>
    </div>
  )
}

export default Product