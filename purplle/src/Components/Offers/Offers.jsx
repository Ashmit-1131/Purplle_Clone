import React, { useEffect, useState } from 'react'
import ImageSlider from './ImageSlider'
import "./Offers.css"
import SingleProduct from './SingleProduct'

const getData1 = async ()=>{
  try{
    let res = await fetch(`https://backenddata-smtw.onrender.com/products?category=skin%20care&_limit=5`)
    let data = await res.json();
    return data;
  }
  catch(err){
    console.log(err)
  }
}
const getData2 = async ()=>{
  try{
    let res = await fetch(`https://backenddata-smtw.onrender.com/products?category=makeup&_limit=5`)
    let data = await res.json();
    return data;
  }
  catch(err){
    console.log(err)
  }
}

const Offers = () => {
  const [list1,setList1] =useState([]);
  const [list2,setList2] =useState([]);

  useEffect(()=>{
    fetchData1()
  },[])
  useEffect(()=>{
    fetchData2()
  },[])

  const fetchData1 = async ()=>{
    try{
      // setLoading(true)
      const data = await getData1()
      setList1(data)
      // setLoading(false)
    }
    catch(err){
      console.log(err)
      // setLoading(false)
    }
  }
  const fetchData2 = async ()=>{
    try{
      // setLoading(true)
      const data = await getData2()
      setList2(data)
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
        <h1 style={{textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>SkinCare</h1>
        <div className="products">
          {
            list1?.map(item=>
              <div key={item.id}>
              <SingleProduct  name={item.name} image={item.image} price={item.price} id={item._id}/>
              </div>
            )
          }
        </div>
        <div style={{marginTop:"20px"}}>
          <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right,dpr-2/mediafiles/ecomm/promo/1673610120_creative-1673610118497-purbassc11201112lakme1280x272copy.jpg" alt="" />
        </div>
        <div style={{marginTop:"20px"}}>
          <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right,dpr-2/mediafiles/ecomm/promo/1668251056_creative-1668251056212-b82315dd-80db-4603-a615-b875efd0768b.jpeg" alt="" />
        </div>
        <h1 style={{textAlign:"center",marginTop:"50px",fontWeight:"bold"}}>MakeUp</h1>
        <div className="products">
          {
            list2?.map(item=>
              <div key={item.id}>
              <SingleProduct  name={item.name} image={item.image} price={item.price} id={item._id}/>
              </div>
            )
          }
        </div>
        <div style={{marginTop:"20px"}}>
          <img src="https://media6.ppl-media.com/tr:w-1280,c-at_max,oi-AD_35x235_small_kJWM53nMn1.png,ofo-top_right,dpr-2/mediafiles/ecomm/promo/1670585792_creative-1670585790195-1280400.jpg" alt="" />
        </div>
    </div>
  )
}

export default Offers