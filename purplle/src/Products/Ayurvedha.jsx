import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { FaShoppingBasket } from "react-icons/fa"
import { HiHeart } from "react-icons/hi"
import { GoStar } from "react-icons/go"
import { ADD_CARD_DATA } from '../Redux/CartRedux/cart_action'
import swal from "sweetalert";
import { GetLocal } from '../Utils/localstorage'
import style from "./Products.module.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Loading from '../Components/Cart_acc_ext/Loading'
import { Flex } from '@chakra-ui/react'
// import Pagination from './Pagination'



function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
export default function MakeupData() {
  
    const [makeup, setmakeup] = useState([])
    
    const [currentPage] = useState(1)
    const [postsPerPage] = useState(Infinity)

   
  const [Load, setLoad] = useState(false);
  const Token = GetLocal("auth") || false;
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const makeupData = () => {
        axios.get(`
        https://backenddata-smtw.onrender.com/products?category=ayurveda`)
          .then((res) => {
            setmakeup(res.data)
    
          }).catch((e) => {
            console.log(e)
          })
  }

  const sorting=(value)=>{
    // console.log(value)
    let highest = makeup
    if(value==="highest"){
       highest = makeup.sort((b,a)=>a.price - b.price)
    }
    else if(value==="lowest"){
      highest = makeup.sort((a,b)=>a.price - b.price)
    }
    else if(value==="asc"){

      highest = makeup.sort((a,b)=>{
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      })
    }
    else if(value==="desc"){
      highest = makeup.sort((a,b)=>{
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
        return 0;
      })
    }
    else{
      highest=makeupData()
    }
   
    console.log(highest);
    setmakeup([...highest])

  }
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage 
  const currPost =  makeup.slice(firstPostIndex, lastPostIndex)

    const Get_update = () => {
      setLoad(true);
      simulateNetworkRequest().then((res) => setLoad(false));
    };
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

      useEffect(() => {
        makeupData()
     Get_update();
      }, [])
      
      

      // console.log(postsPerPage)

  return (
    <>
    <div style={{marginTop:"5%"}} >

    <form>
      <select id="sort" name="sort" onClick={(e)=>sorting(e.target.value)}>
        <option value="normal" >Filters</option>
        <option value="#" disabled></option>
        <option value="lowest">Low to High</option>
        <option value="#" disabled></option>
        <option value="highest">High to Low</option>
        <option value="#" disabled></option>
        {/* <option value="asc">Ascending(a-z)</option>
        <option value="#" disabled></option>
        <option value="desc">Descending(z-a)</option> */}
      </select>
    </form>
     <div style={{display:"flex",width:"80%",margin:"auto"}}>
     
      
      {Load ? (
        <Flex alignItems="center" justifyContent="center" p="30px" > 
        <Loading /></Flex>
      ) :
        <div id={style.makeup_main_container}>
          {currPost.map((item) => {
            return (
              <div id={style.makeup_main_div}>
                <div id={style.makeup_img_div}>
                  <img src={item.image} alt="" />
                </div>
                <div id={style.makeup_name_div}>
                  <p>{item.name}</p>
                </div>
                <div id={style.go_star_div}>
                  <GoStar />
                  <GoStar />
                  <GoStar />
                  <GoStar />
                  <GoStar />
                </div>
                <div id={style.price_pink_div}>
                  <h4>{"₹ " + item.price}</h4>
                </div>
                <div id={style.main_add_cart_div}>
                  <div
                    id={style.add_to_cart_div}
                    onClick={() =>
                      handleCartClick(item.image, item.price, item.name)
                    }
                  >
                    <FaShoppingBasket />
                    <p>Add To Cart</p>
                  </div>
                  <div id={style.hrt_div}>
                    <HiHeart color="white" />
                  </div>
                </div>
              </div>
            );
          }
          )}
        </div>}
    </div>
            </div>
    {/* <Pagination totalPosts={makeup.length} postsPerPage={postsPerPage}/> */}
    </>
   
    
  )
}