import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from './ImageSlider'
import "./Offers.css"
import SingleProduct from './SingleProduct'

const getData = async ()=>{
  try{
    let res = await fetch(`https://backenddata-smtw.onrender.com/products?category=skin%20care&_limit=5`)
    let data = await res.json();
    return data;
  }
  catch(err){
    console.log(err)
  }
}

const Offers = () => {
  const [list,setList] =useState([]);

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=>{
    try{
      // setLoading(true)
      const data = await getData()
      setList(data)
      // setLoading(false)
    }
    catch(err){
      console.log(err)
      // setLoading(false)
    }
  }
  // console.log(list)
    const slides = [
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674109513_rose-hip_web_category-1.gif"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674029677_1298x418-4.gif"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674029762_face_compact_web_hp.jpg"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674106511_pu_webhp-1.jpg"},
        { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673849666_hp-top-carousel-size-1298x418-2.gif"},
      ];
      const containerStyles = {
        width: "97%",
        height: "380px",
        margin: "0 auto",
      };
  return (
    <div>
        <div className='heading'>
            <img src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1563364997_offers-for-you-d.jpg" alt="heading" />
        </div>
        <div className='containerStyles' style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
        <div className="products" style={{
            display:"grid",
            margin:"auto",
            marginTop:"50px",
            gridTemplateColumns:"repeat(5,1fr)",
            gap:"20px",
            width:"95%"
          }}>
          {
            list?.map(item=>
              <SingleProduct key={item.id} name={item.name} image={item.image} price={item.price}/>
            )
          }
        </div>
    </div>
  )
}

export default Offers