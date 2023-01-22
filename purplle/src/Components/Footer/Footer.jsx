import React from 'react'
import "../Footer/Footer.css";
// import {AiFillTwitterCircle} from "react-icons";
// import { BsFillAlarmFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import {AiOutlineInstagram} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";
import {FaPinterest} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
const Footer = () => {
    
  return (
    <div className='mainfoot'>
        <div className='mainfootchild1'>
            
            <div>
                <h3 style={{fontSize:"14px",color:"#6C7A82"}}>PURPLLE</h3>
                <p>About us</p>
                <p>Our Team</p>
                <p>Carrers</p>
                <p>Press</p>
                <p>Sitemap</p>
            </div>
            <div>
                <h3>PURPLLE BUSINESS</h3>
                <p>Sell on Purplle</p>
            </div>
            <div>
                <h3>POLICY INFO</h3>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Return & Cancellation Policy</p>
            </div>
            <div>
                <h3>NEED HELP?</h3>
                <p>FAQ'S</p>
                <p>Conatct Us</p>
            </div>
        </div>
       
        {/* second div start */}
        <div className='mainfootchild2'>
            <div className='mann1'>
                <div style={{marginRight:"-50px"}}>
                    <h3 style={{color:"#6C7A82",fontSize:"14px",marginRight:"-60px"}}>PAYMENT</h3>
                </div>
                <div style={{marginRight:"0px"}}>
                <img style={{marginTop:"0px"}} src="https://media6.ppl-media.com/mediafiles/ecomm/promo/1499177379_tt.jpg" alt="img" />
                </div>
            </div>

            <div className='mann2'>
                <div>
                    <h3 style={{color:"#6C7A82",fontSize:"14px",marginRight:"-30px"}}>CONNECT</h3>
                </div>
                <div className='footicon' style={{marginTop:"0px"}}>
                    
                    <span style={{marginRight:"5px"}}><AiFillTwitterCircle style={{fontSize:"25px"}} /></span>
                    <span style={{marginRight:"5px"}}><FaFacebook style={{fontSize:"23px"}} /></span>
                    <span style={{marginRight:"5px"}}><FaPinterest style={{fontSize:"23px"}} /></span>
                    <span style={{marginRight:"5px"}}><FaYoutube style={{fontSize:"23px"}}  /></span>
                    <span style={{marginRight:"5px"}}><AiOutlineInstagram style={{fontSize:"25px"}}  /></span>
                    <span><FaLinkedin style={{fontSize:"25px"}}  /></span>
                </div>
            </div>
           
        </div>
       
    </div>
  )
}

export default Footer;