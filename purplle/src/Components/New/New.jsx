import React from 'react'
import axios from "axios"
import { Flex, Image ,Box,Text, Button,Heading, Spacer} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import NewProducts from './NewProducts' 
import './NewProduct.css';
import { Link } from 'react-router-dom'




function New () {
    const [skindata,setskinData]=useState([])
    const[makeup,setMakeup]=useState([])
    const [pcare,setPcare]=useState([])
    const [Hcare,setHcare]=useState([])
    const [Bcare,setBcare]=useState([])
    const [ayurveda,setAyurveda]=useState([])
    const [fragmence,setFragmence]=useState([])    
    
  
useEffect(()=>{

  let skincare=axios.get("https://backenddata-smtw.onrender.com/products?category=skin care")
  .then((res=>setskinData(res.data)))
  .catch(err=>console.log(err))
},[])
useEffect(()=>{

  let makeupData=axios.get("https://backenddata-smtw.onrender.com/products?category=makeup")
  .then((res=>setMakeup(res.data)))
  .catch(err=>console.log(err))
},[])
useEffect(()=>{

  let pcareData=axios.get("https://backenddata-smtw.onrender.com/products?category=personal care")
  .then((res=>setPcare(res.data)))
  .catch(err=>console.log(err))
},[])
useEffect(()=>{

  let Health=axios.get("https://backenddata-smtw.onrender.com/products?category=health")
  .then((res=>setHcare(res.data)))
  .catch(err=>console.log(err))
},[])
useEffect(()=>{

  let Babycare=axios.get("https://backenddata-smtw.onrender.com/products?category=babycare")
  .then((res=>setBcare(res.data)))
  .catch(err=>console.log(err))
},[])
useEffect(()=>{

  let frag=axios.get("https://backenddata-smtw.onrender.com/products?category=fragmence")
  .then((res=>setFragmence(res.data)))
  .catch(err=>console.log(err))
},[])
useEffect(()=>{

  let ayur=axios.get("https://backenddata-smtw.onrender.com/products?category=ayurveda")
  .then((res=>setAyurveda(res.data)))
  .catch(err=>console.log(err))
},[])
const Card = ({dPrice,id, image,price,name}) => {
  return (
    <div className='container'  style={{ textAlign: 'center',cursor:'pointer' }}>
     <Link to={`/${id}`} > <img
        className='multi__image'
        src={image}
        alt='newProduct'
        style={{
          width: '100%',
          height: '170px',
          objectFit: 'contain',
          marginBottom: '10px',
          
        }}
       
        
      /></Link>
      <p style={{ fontSize: '16px',fontFamily:"Aqleema-Regular" , padding: '5px 0px 0px',color:"#566770" }}>{name}</p>
     <div style={{gap:"0.5rem"}} >


      <p style={{ fontSize: '18px', fontFamily:"Aqleema-Regular",padding: '5px 0', color: '#2C414C' }}>
      ₹   {dPrice}
      </p>
      
      <p style={{ fontSize: '18px', fontFamily:"Aqleema-Regular",padding: '5px 0', color: '#2C414C' }}>
      <del>{price}</del>
      </p>
      
      <p>{Math.ceil((price-dPrice)/price*100)}% off</p>
      
     </div>
      
      <Button className='button' style={{ fontSize:"14px",fontFamily:"Aqleema-Regular", backgroundColor:"#2C414C",color:"white",padding:"5px 0px 3px"}} >ADD TO CART</Button>
    </div>
  );
};
    
    
  return (
    
    <div>


   <Image style={{marginRight:"auto", marginLeft:"auto" }} src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1657353585_new-launches_web_hp.gif" alt='New Products' />

   <br/>

   <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >JUST IN  -  SKINCARE SPECIALS</Text>
    <NewProducts products={skindata.map(item=><Card id={item._id}  image={item.image}  dPrice={item.discountPrice} price={item.price} name={item.name} />)} />
   <br/>
    <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >JUST DROPPED - MAKEUP</Text>

    <NewProducts products={makeup.map(item=><Card id={item._id} image={item.image} dPrice={item.discountPrice} price={item.price} name={item.name} />)} />
    <br/>
    <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >EXCLUSIVE PERSONAL CARE</Text>

    <NewProducts products={pcare.map(item=><Card id={item._id} image={item.image} dPrice={item.discountPrice} price={item.price} name={item.name} />)} />
<br/>
    <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >EXCLUSIVE HEALTH CARE</Text>
    <NewProducts products={Hcare.map(item=><Card id={item._id} image={item.image} dPrice={item.discountPrice} price={item.price} name={item.name} />)} />
    <br />
    <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >EXCLUSIVE BABY CARE</Text>
    <NewProducts products={Bcare.map(item=><Card id={item._id} image={item.image} dPrice={item.discountPrice} price={item.price} name={item.name} />)} />
    <br />
    <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >EXCLUSIVE - FRAGRANCE </Text>
    <NewProducts products={fragmence.map(item=><Card id={item._id} image={item.image} dPrice={item.discountPrice} price={item.price} name={item.name} />)} />
    <br />
    <Text style={{textAlign:"center", color:"#2C414C",font:"30px PT Serif New",fontWeight:"bold"}} >EXCLUSIVE - AYURVEDA</Text>
    <NewProducts products={ayurveda.map(item=><Card id={item._id} image={item.image} dPrice={item.discountPrice} price={item.price} name={item.name} />)} />

    {/* <Heading textAlign={"center"} >DUMMY FOOTER</Heading> */}

    </div>
    
    

  )
}

export default New