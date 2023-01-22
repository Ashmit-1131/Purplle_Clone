import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { Button, ChakraProvider, color } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import styles from "./Homepage.module.css"
// import Footer from "./Footer";
// import Navbar from "./Navbar";

const url="https://backenddata-smtw.onrender.com/products";
const url1="https://backenddata-smtw.onrender.com/products?category=babycare";
const url2="https://backenddata-smtw.onrender.com/products?category=fragmence";
const url3="https://backenddata-smtw.onrender.com/products?category=hair%20care";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",backgroundColor: "black",color:"red"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", backgroundColor: "black" }}
        onClick={onClick}
      />
    );
  }
  



function Homepage() {
    const [post,setPost]=useState([]);
    const [post1,setPost1]=useState([]);
    const [post2,setPost2]=useState([]);
    const [post3,setPost3]=useState([]);
    const slides = [
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674146381_header-web.gif"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674117420_minimalist_bodycare-2596x836-1.jpeg"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674137727_bh_webhp-4.gif"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674106511_pu_webhp-1.jpg"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673849666_hp-top-carousel-size-1298x418-2.gif"},
    ];
    const slides1 = [
      { url: "https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1667649361_exclusive-web.gif?tr=f-gif"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674032016_web.gif"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674054467_loreal-group_webstrip-12-1.jpg"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674120297_milestone-campaign-thick-strip_web.jpg"},
      { url: "https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674056836_body-shop-flat-20-web.jpg"},
    ];
    const slides2 = [
      { url:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673946201_welcome-web-.gif"},
      { url:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673946153_appfirst-web.gif"},
      { url:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673946201_welcome-web-.gif"},
      { url:"https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673942496_half-pice-web.gif?tr=f-gif"},
      { url:"https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1673942767_offerslikeneveruptosku_web.gif"},
    ]
    const containerStyles = {
      width: "97%",
      height: "380px",
      margin: "0 auto",
    };
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
         return  setPost(res.data);
        })
    },[])
    useEffect(()=>{
        axios.get(url1)
        .then((res)=>{
         return  setPost1(res.data);
        })
    },[])
    useEffect(()=>{
        axios.get(url2)
        .then((res)=>{
         return  setPost2(res.data);
        })
    },[])
    useEffect(()=>{
        axios.get(url3)
        .then((res)=>{
         return  setPost3(res.data);
        })
    },[])
    console.log(post)
    const settings = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const settings1 = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      const settings2 = {
        dots: false,
        infinite: false,
        speed: 900,
        slidesToShow: 1.0,
        slidesToScroll: 1.0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        Height:'1000px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
    return ( 
      <> 
        {/* <Navbar/> */}
        <ChakraProvider>
        <div >
        <div className='containerStyles' style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
            
            <br /><br />
           
             <h1 style={{fontWeight:"bolder",marginLeft:'-68rem'}}>JUST DROPPED</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post.map(item=>(
                <div style={{height:'440px'}}>
                <div className={styles.card} style={{borderRadius:'10px',gap:'20px',height:'340px',overflow:'hidden'}}>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <Link to={`/${item._id}`}><img style={{marginLeft:"45px"}} src={item.image} /></Link>
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px"}}>
                <h3 style={{color:"#566770"}}>{item.name}</h3>
                <h2 style={{fontWeight:"bold" ,fontSize:"16px"}}>${item.discountPrice}<span style={{marginLeft:"5px",color:"grey",textDecoration:"line-through"}}>{item.price}</span></h2><span style={{color:"#E40980"}}>35% off</span>
                <button className={styles.quick}>ADD TO CART</button>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br />
            <div className='containerStyles' style={containerStyles}>
            <ImageSlider slides={slides1} />
        </div>
        <br /><br />
            {/* //////////////////////end of first carousel/////////////////////////////// */}
            <h1 style={{fontWeight:"bolder",marginLeft:'-65rem'}}>BABY PRODUCTS</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post1.map(item=>(
                <div>
                <div className={styles.card} style={{borderRadius:'10px',height:'340px',overflow:'hidden'}}>
                    <div>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px"}}>
                <h3 style={{color:"#566770"}}>{item.name}</h3>
                <h2 style={{fontWeight:"bold" ,fontSize:"16px"}}>${item.discountPrice}<span style={{marginLeft:"5px",color:"grey",textDecoration:"line-through"}}>{item.price}</span></h2><span style={{color:"#E40980"}}>15% off</span>
                <button className={styles.quick}>ADD TO CART</button>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br />
            
            <div className='containerStyles' style={containerStyles}>
            <ImageSlider slides={slides2} />
        </div>
        <br /><br />
            {/* //////////////////////////////////end of second carousel////////////////////////////////// */}
            <h1 style={{fontWeight:"bolder",marginLeft:'-69rem'}}>BEST OFFERS</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings1}>

            {
            post2.map(item=>(
                <div>
                <div className={styles.card} style={{borderRadius:'10px',height:'330px',overflow:'hidden'}}>
                <div className="card-top" style={{backgroundColor:"red",width:'150px',marginLeft:'120px',marginTop:'20px'}}>
                    <img  src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px",lineHeight:"30px"}}>
                <h3 style={{color:"#566770"}}>{item.name}</h3>
                <h2 style={{fontWeight:"bold" ,fontSize:"16px"}}>${item.discountPrice}<span style={{marginLeft:"5px",color:"grey",textDecoration:"line-through"}}>{item.price}</span></h2><span style={{color:"#E40980"}}>35% off</span>
                <button className={styles.quick}>ADD TO CART</button>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /> <br /> <br />
                {/* ///////////////////////////////////////end of third carousel////////////////////////////////////////////// */}
                {/*//////////////////////////////////////////first div/////////////////////////////////////////////////////////  */}

                <div style={{display:'flex',width:"95%",justifyContent:'space-evenly'}}>
                    <div style={{height:'280px',marginLeft:'63px',width:'450px',borderRadius:'5px',backgroundColor:'#feebef'}}>
                        {/* <h1 style={{fontSize:'30px',fontWeight:"bolder",textAlign:'left'}}>NEW Anastasia Beverly Hills</h1>
                        <h1 style={{fontSize:'15px',textAlign:'left'}}>Get fuller-looking, softer, and smoother brows with the Brow Genius Serum—only at Sephora.</h1>
                        <br /> */}
                        <h1 style={{fontSize:'18px',fontWeight:'bolder',textAlign:'left'}}>SHOP NOW▸</h1>
                    <img style={{width:'118%'}} src="https://media6.ppl-media.com/tr:dpr-2/mediafiles/ecomm/misc/1673953608_lakme-720x350.jpeg" />
                    </div>
                    <div style={{height:'280px',marginLeft:'13px',width:'450px',borderRadius:'5px',backgroundColor:'#a5e1bd'}}>
                    {/* <h1 style={{fontSize:'30px',fontWeight:"bolder",textAlign:'left'}}>Clean Beauty Under $20</h1>
                        <h1 style={{fontSize:'15px',textAlign:'left'}}>New hair and skin heroes powered by feel-good ingredients.</h1>
                        <br /> */}
                        <h1 style={{fontSize:'18px',fontWeight:'bolder',textAlign:'left'}}>SHOP NOW▸</h1>
                    <img src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2,f-gif/mediafiles/ecomm/misc/1674056586_creme-blush3.gif"/>
                    </div>
                    <div style={{height:'280px',marginLeft:'13px',width:'450px',borderRadius:'5px',backgroundColor:'#8cb8e9'}}>
                    {/* <h1 style={{fontSize:'30px',fontWeight:"bolder",textAlign:'left'}}>Wedding Beauty Services</h1>
                        <h1 style={{fontSize:'15px',textAlign:'left'}}>Get a makeup look you'll love for all your big events.</h1>
                        <br /> */}
                        <h1 style={{fontSize:'18px',fontWeight:'bolder',textAlign:'left'}}>SHOP NOW▸</h1>
                    <img src="https://media6.ppl-media.com/tr:w-640,ar-20557-9993,c-at_max,pr-true,dpr-2/mediafiles/ecomm/misc/1674137450_mamaearth.png"/>
                    </div>

                </div>
                <br />


                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <h1 style={{fontWeight:"bolder",marginLeft:'-68rem'}}>SELLING FAST</h1>
            <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post3.map(item=>(
                <div>
                <div className={styles.card} style={{borderRadius:'10px',height:'340px',overflow:'hidden'}}>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px"}}>
                <h3 style={{color:"#566770"}}>{item.name}</h3>
                <h2 style={{fontWeight:"bold" ,fontSize:"16px"}}>${item.discountPrice}<span style={{marginLeft:"5px",color:"grey",textDecoration:"line-through"}}>{item.price}</span></h2><span style={{color:"#E40980"}}>35% off</span>
                <button className={styles.quick}>ADD TO CART</button>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div>
            <br />
            {/* ////////////////////////////end of fourth carusel///////////////////////////////////////////////// */}
            {/* <h1 style={{fontWeight:"bolder",marginLeft:'-62rem'}}>BEAUTY INSIDER REWARDS</h1>
            <h1 style={{marginLeft:'-65rem'}}>REDEEM YOUR POINTS</h1> */}
            {/* <div style={{width:'90%',margin:'auto'}}>
            <Slider {...settings}>

            {
            post4.map(item=>(
                <div>
                <div className="card" style={{borderRadius:'10px',height:'290px',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',overflow:'hidden'}}>
                <div className="card-top" style={{width:'150px',marginLeft:'35px',marginTop:'20px'}}>
                    <img style={{marginLeft:"45px"}} src={item.image} />
                </div>
                <div className="card-bottom" style={{textAlign:"center",marginTop:"2px",lineHeight:"30px"}}>
                <h3>{item.title}</h3>
                <Button style={{borderRadius:'10px',backgroundColor:'white',color:'black',border:'1px solid black',fontWeight:'bold',width:'90px'}}>REDEEM</Button>
                <h1 style={{fontWeight:"bolder"}}>100 POINTS</h1>
                </div>
            </div>
            </div>
            ))}
            </Slider>
            </div><br /><br /> */}
        </div>
        </ChakraProvider>
        {/* <Footer/> */}
        </>
     );
}

export default Homepage;