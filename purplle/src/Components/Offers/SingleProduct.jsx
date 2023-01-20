import React from 'react'

const SingleProduct = ({name,image,price}) => {
  return (
    <div>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>{price}</p>
    </div>
  )
}

export default SingleProduct