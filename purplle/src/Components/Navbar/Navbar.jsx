import React from "react";
import {  NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
  Y,
  Z,
} from "./brandData";
import { mostviewed, featured, newlylaunches } from "./brandData";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  textDecoration,
  Stack,
  Box,
  Flex,
  HStack,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

import {IconButton} from "@chakra-ui/react"
import {
  faceMakeup,
  lipMakeup,
  eyemakeup,
  hairStylingTools,
  shampoo,
  byconcerns,
  cleansers,
  eyecare,
  handFootcare,
  stylingTools,
  hairRemovalTools,
  faceBodyTools,
} from "./brandData";
import { useDisclosure } from "@chakra-ui/react";
import { BsSearch, BsHeart, BsEmojiSmile, BsCart4 } from "react-icons/bs";
import { RxCross2 } from "react-icons/bs";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const [count, setCount] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
   const { isOpen: isModal2Open, onOpen: openModal2, onClose: closeModal2 } = useDisclosure();
  const btnRef = React.useRef();

  const handleOver = (val) => {
    setCount(val);
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
    const result = A.filter((el) => {
      console.log(el);
      return el.toLowerCase().includes(query);
    });
    setSearchResults(result);
  };
  console.log(searchResults);

  return (
    <Box className={styles.navwrap}>
      <Flex className={styles.nav}>
      <IconButton
            size={'md'}
            icon={isModal2Open ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isModal2Open ? closeModal2 : openModal2}
          />
        <NavLink to={"/"}>
          <img
            className={styles.logo}
            src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
            alt=""
          />
        </NavLink>
        <div>
          <Popover trigger="hover">
            <PopoverTrigger>
              <span>SHOP CATEGORIES </span>
            </PopoverTrigger>
            <PopoverContent
              border={"0px"}
              marginTop={"13px"}
              width="100%"
              marginLeft={"15%"}
              backgroundColor="white"
            >
              <PopoverHeader
                display={"flex"}
                width={"100%"}
                gap="50px"
                justifyContent={"space-around"}
                alignItems="center"
              >
                <div>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <p>Makeup</p>
                    </PopoverTrigger>
                    <PopoverContent
                      marginTop={"2px"}
                      width={"100%"}
                      marginLeft={"20%"}
                      marginRight="20%"
                      height={"500px"}
                      boxShadow={
                        "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
                      }
                    >
                      <PopoverBody>
                        <div
                          style={{
                            display: "flex",
                            gap: "350px",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          {/* <p><b> Face Makeup</b></p> */}
                          <div>
                            <b>Face Makeup</b>
                            {faceMakeup.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>Lip Makeup</b>
                            {lipMakeup.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>Eye Makeup</b>
                            {eyemakeup.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <p>Skin Care</p>
                    </PopoverTrigger>
                    <PopoverContent
                      marginTop={"2px"}
                      width={"100%"}
                      marginLeft={"20%"}
                      marginRight="20%"
                      height="500px"
                    >
                      <PopoverBody>
                        <div
                          style={{
                            display: "flex",
                            gap: "300px",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          {/* <p><b> Face Makeup</b></p> */}
                          <div>
                            <b>CLEANSERS</b>
                            {cleansers.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>EYE CARE</b>
                            {eyecare.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>HAND & FOOT CARE</b>
                            {handFootcare.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <p>Hare Care</p>
                    </PopoverTrigger>
                    <PopoverContent
                      marginTop={"2px"}
                      width={"100%"}
                      marginLeft={"20%"}
                      marginRight="20%"
                      height={"500px"}
                    >
                      <PopoverBody>
                        <div
                          style={{
                            display: "flex",
                            gap: "200px",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          {/* <p><b> Face Makeup</b></p> */}
                          <div>
                            <b>SHAMPOO & CONDITIONERS</b>
                            {shampoo.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>HAIR STYLING & TOOLS</b>
                            {hairStylingTools.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>BY CONCERN</b>
                            {byconcerns.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <p>Application</p>
                    </PopoverTrigger>
                    <PopoverContent
                      marginTop={"2px"}
                      width={"100%"}
                      marginLeft={"20%"}
                      marginRight="20%"
                      height={"500px"}
                    >
                      <PopoverBody>
                        <div
                          style={{
                            display: "flex",
                            gap: "250px",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          {/* <p><b> Face Makeup</b></p> */}
                          <div>
                            <b>STYLING TOOLS</b>
                            {stylingTools.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>HAIR REMOVAL TOOLS</b>
                            {hairRemovalTools.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>FACE & BODY TOOLS</b>
                            {faceBodyTools.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <p>Personal Care</p>
                    </PopoverTrigger>
                    <PopoverContent
                      marginTop={"2px"}
                      width={"100%"}
                      marginLeft={"0%"}
                      marginRight="20%"
                      height={"500px"}
                    >
                      <PopoverBody>
                        <div
                          style={{
                            display: "flex",
                            gap: "300px",
                            justifyContent: "space-between",
                            width: "100%",
                            alignItems: "center",
                          }}
                        >
                          {/* <p><b> Face Makeup</b></p> */}
                          <div>
                            <b>Face Makeup</b>
                            {faceMakeup.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>Lip Makeup</b>
                            {lipMakeup.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                          <div>
                            <b>Eye Makeup</b>
                            {eyemakeup.map((el) => {
                              return <p className={styles.makeuphover}>{el}</p>;
                            })}
                          </div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <p>Men</p>
                </div>
                <div>
                  <p>Fragrance</p>
                </div>
                <div>
                  <p>Health & Wellness</p>
                </div>
                <div>
                  <p>Mom & Baby</p>
                </div>
                <div>
                  <p>Men</p>
                </div>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Popover trigger="hover">
            <PopoverTrigger>
              <NavLink to={"/brands"}>BRANDS </NavLink>
            </PopoverTrigger>
            <PopoverContent
              marginTop={"12px"}
              width="700px"
              height="500px"
              style={{ overflowY: "scroll" }}
            >
              <PopoverBody>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "20px",
                          fontSize: "13px",
                        }}
                      >
                        <p>Shop Purplle Brands</p>
                        <p>See All</p>
                      </div>

                      <div>
                        <FormControl>
                          <InputGroup size="xs" width={"250px"}>
                            <Input
                              onChange={handleChange}
                              value={query}
                              variant="outline"
                              type="text"
                              placeholder="Search for Products and Brands"
                            />
                            <InputRightElement
                              children={<BsSearch color="pink.200" />}
                            />
                          </InputGroup>
                        </FormControl>
                      </div>
                      <br />
                      <b>Top Brands</b>
                      <div>
                        <b>A</b>
                      </div>
                      <div style={{ overflowY: "scroll", fontSize: "13px" }}>
                        {A.map((el) => {
                          return <p>{el}</p>;
                        })}
                        <div>
                          <b>B</b>
                        </div>
                        {B.map((el) => {
                          return <p>{el}</p>;
                        })}
                        <div>
                          <b>C</b>
                        </div>
                        {C.map((el) => {
                          return <p>{el}</p>;
                        })}

                        <div>
                          <b>D</b>
                        </div>
                        {D.map((el) => {
                          return <p>{el}</p>;
                        })}
                        <div>
                          <b>E</b>
                        </div>
                        {E.map((el) => {
                          return <p>{el}</p>;
                        })}
                        <div>
                          <b>F</b>
                        </div>
                        {F.map((el) => {
                          return <p>{el}</p>;
                        })}
                        <div>
                          <b>G</b>
                        </div>
                        {G.map((el) => {
                          return <p>{el}</p>;
                        })}
                        <div>
                          <b>H</b>
                        </div>
                        {H.map((el) => {
                          return <p>{el}</p>;
                        })}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={styles.brandstatus}>
                      <p
                        onMouseOver={() => handleOver(1)}
                        onMouseOut={() => setCount(0)}
                      >
                        MOST VIEWED
                      </p>
                      <p
                        onMouseOver={() => handleOver(2)}
                        onMouseOut={() => setCount(0)}
                      >
                        FEATURED
                      </p>
                      <p
                        onMouseOver={() => handleOver(3)}
                        onMouseOut={() => setCount(0)}
                      >
                        NEW LAUNCHES
                      </p>
                    </div>
                    <div className={styles.brandstatusImg}>
                      {/* show brand images */}
                      {count === 1
                        ? mostviewed.map((el) => {
                            return <img src={el} alt="" />;
                          })
                        : count === 2
                        ? featured.map((el) => {
                            return <img src={el} alt="" />;
                          })
                        : count === 3
                        ? newlylaunches.map((el) => {
                            return <img src={el} alt="" />;
                          })
                        : undefined}
                    </div>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <NavLink to={"/offers"}>OFFERS </NavLink>
        <NavLink to={"/new"}>NEW </NavLink>
        <NavLink to={"/magagin"}>MAGAZINE </NavLink>
        <div>
          <span ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <BsSearch size={35} style={{ fill: "black" }} />
          </span>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Search for Products and Brands</DrawerHeader>

              <DrawerBody>
                <FormControl className={styles.form}>
                  <InputGroup>
                    <Input
                      variant="flushed"
                      borderColor={'Pink'}
                      borderBottomWidth="2px"
                      type="search"
                      placeholder="Search for Products and Brands"
                    />
                    <InputRightElement
                      children={<BsSearch color="pink.200" size={25} />}
                    />
                  </InputGroup>
                </FormControl>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
        <NavLink to={"/favourites"}>
          <BsHeart size={35} style={{ fill: "black" }} />
        </NavLink>
        <div>
          <Popover trigger="hover">
            <PopoverTrigger>
              <span>
                <BsEmojiSmile size={35} style={{ fill: "black" }} />
              </span>
            </PopoverTrigger>
            <PopoverContent marginTop={"5px"}>
              <PopoverHeader display={'flex'} justifyContent="center">
                <Button
                  variant={"solid"}
                  colorScheme="purple"
                  paddingTop={2}
                  paddingBottom="2"
                  paddingLeft={"20"}
                  paddingRight={"20"}
                  display="flex"
                  
                >
                  SignIn
                </Button>
                
              </PopoverHeader>
              <PopoverBody >
                <Stack>
                <HStack>
                  <p>New Customers</p>
                  <p>Start here</p>
                </HStack>
                <div style={{fontSize:"13px"}}>
                  <p>Your Orders</p>
                  <p>Your Accounts</p>
                  <p>Elite Members</p>
                  <p>Your Beauty Profile</p>
                  <p>Your Wishlist</p>
                  <p>Your Credits</p>
                  <p>Become a seller</p>
                  <NavLink to={'/'}>Register Now</NavLink>
                </div>
                </Stack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </div>
        <div>

       
            <span>
         
            <BsCart4 size={35} style={{ fill: "black" }} />
           
          </span>
      
          
        </div>
      </Flex>
    </Box>
  );
};

export default Navbar;