import {
    Input,
     InputGroup,
     InputRightElement,
    
   } from "@chakra-ui/react";
   import React, { useEffect } from "react";
   
   import { useState } from "react";
   import styles from "./nav.module.css";
   import axios from "axios";
   import { Navigate,Link, NavLink } from "react-router-dom";
   
   const getData = (data) => {
     return axios.get(
       `https://repulsive-nightgown-colt.cyclic.app/navbars?q=${data}`
     );
   };
   
   const Navinput = () => {
     const [q, setQ] = useState("");
     const [suggestion, setSuggestion] = useState([]);
   
     const handleText = (data) => {
       setQ(data);
     };
     useEffect(() => {
       let timeout = setTimeout(() => {
         if (q === "") {
           setSuggestion([]);
         } else {
           getData(q)
             .then((res) => {
               setSuggestion(res.data);
             })
             .catch((e) => {
               console.log(e);
             });
         }
       }, 800);
       return () => clearTimeout(timeout);
     }, [q]);
   
     console.log("here suggestion", suggestion);
   
     return (
       <>
         <InputGroup>
         
 
              
        
             <Input
               size="lg"
               variant="flushed"
          
 
              
                         borderColor={"Pink"}
                         borderBottomWidth="2px"
                         type="search"
                         placeholder="Search for Products and Brands"
               onChange={(e) => handleText(e.target.value)}
               value={q}
             
             
             />
             <InputRightElement 
              
             />
           
              
           
         
        
         </InputGroup>
         <div className={suggestion.length > 0 ? styles.suggestion : null}>
               {suggestion.length > 0
                 ? suggestion.map((item, index) => {
                     return (
                       <div
               
                         key={index}
                         style={{
                           display: "flex",
                           alignItems: "center",
                           gap: "1rem",
                           padding: "15px",
                           
                           
                         }}
                       >
                        <Link to="./hair"
                       
                       
                          
                          
                         
                       >
                         <img src={item.image} style={{ height: "40px" }} alt="" />
                         <h3>{item.description}</h3>
                       </Link>
                       </div>
                     );
                   })
                 : null}
             </div>
       </>
     );
   };
   
   export default Navinput;