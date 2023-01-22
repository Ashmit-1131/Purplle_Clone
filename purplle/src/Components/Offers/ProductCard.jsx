import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {Button, Spinner} from "@chakra-ui/react"
import "./ProductCard.css";

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
                <Button colorScheme='blue'>ADD TO CART</Button>
                <Button>Wishlist</Button>
          </div>
        </div>
    </div>
  )
}

export default Product