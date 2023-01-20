import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const [pdata, setPdata] = useState({});
    const params = useParams();
  
    useEffect(() => {
      fetch(`https://backenddata-smtw.onrender.com/products?_id=${params._id}`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res[0])
          setPdata(res[0]);
        });
    }, []);
    console.log(pdata);
    return (
      <>
        <h1>Dummy Navbar</h1>
        <Flex>

       <Box style={{height:"500px",width:"700px"}} >
        <Image height="100%" width="100%" src={pdata.image} alt="Product" />
       </Box>
       <Box style={{height:"500px",width:"700px"}}>
        <Text>{pdata.name}{" - "}{pdata.category}</Text>
        <Text> ₹ {pdata.discountPrice}{"  "}<del>{pdata.price}</del>{"  "}{Math.ceil((pdata.price-pdata.discountPrice)/pdata.price*100)}%</Text>
        <Button>Add to Cart</Button>

       </Box>
        </Flex>
        <h1>Footer</h1>
      </>
    );
  }
  
  export default ProductPage;
  