import React from 'react'

import { Link } from "react-router-dom";


const SingleProduct = ({id,name,image,price}) => {





  // console.log(id)
  return (
    <div style={{border: "1px solid #e9eced",padding:"10px"}}>
        <Link to={`/offers/${id}`} >
          <img
        src={image}
        alt='newProduct'/>
        </Link>
        <p style={{color: "#566770"}}>{name}</p>
        <p style={{fontSize:"20px",fontWeight:"bolder"}}>₹{price}</p>
    </div>
  )
}

export default SingleProduct