import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

import { A, B, C, D, E, F, G, H } from "./brandData";
import { mostviewed, featured, newlylaunches } from "./brandData";

import { Stack, Box, Flex, HStack, VStack } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { FormControl } from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
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
import {
  BsSearch,
  BsHeart,
  BsEmojiSmile,
  BsCart4,
  BsVectorPen,
  BsListNested,
} from "react-icons/bs";

import { HamburgerIcon } from "@chakra-ui/icons";
import { CiWallet, CiSettings, CiGift } from "react-icons/ci";
import { MdFace } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { HiOutlineHome } from "react-icons/hi";

import { AiOutlineTag } from "react-icons/ai";
import { GiDrippingStar } from "react-icons/gi";
import { HiOutlineBookOpen } from "react-icons/hi";

const Navbar = () => {
  const [count, setCount] = React.useState(0);
  const [query, setQuery] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isModal2Open,
    onOpen: openModal2,
    onClose: closeModal2,
  } = useDisclosure();
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
    <Box
      width={"100%"}
      margin="auto"
      top={'0px'}

      position={"fixed"}
      backgroundColor="white"
    >
      <HStack h={16} alignItems={"center"} justifyContent="center">
        {/* responsive */}
        <Box
          width="100%"
          display={{ base: "flex", md: "none" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display={"flex"} alignItems="center" gap={"20px"}>
            <IconButton
              size={"md"}
              icon={isModal2Open ? <HamburgerIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isModal2Open ? closeModal2 : openModal2}
            />

            <Box>
              <NavLink to={"/"}>
                <img
                  width={"80px"}
                  src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
                  alt=""
                />
              </NavLink>
            </Box>
          </Box>

          <Box display={"flex"} gap="20px" marginRight={"10%"}>
            <Box onClick={onOpen}>
              <BsSearch size={"20px"} />
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

                  <DrawerBody></DrawerBody>
                </DrawerContent>
              </Drawer>
            </Box>
            <NavLink to={"/cart"}>
              <BsCart4 />
            </NavLink>
            <Box>
              <Popover>
                <PopoverTrigger>
                  <Box>
                    <BsEmojiSmile size={20} />
                  </Box>
                </PopoverTrigger>
                <PopoverContent
                  marginTop={"10px"}
                  width="150px"
                  borderWidth={"0px"}
                >
                  <PopoverBody>
                    <VStack className={styles.accountInphone}>
                      <HStack>
                        <BsEmojiSmile size={"10px"} />
                        <p>My Account</p>
                      </HStack>
                      <HStack>
                        <TiTickOutline size={"10px"} />
                        <p>Elite Membership</p>
                      </HStack>
                      <HStack>
                        <CiGift size={"10px"} />
                        <p>My Orders</p>
                      </HStack>
                      <HStack>
                        <BsHeart size={"10px"} />
                        <p>My Wishlist</p>
                      </HStack>
                      <HStack>
                        <MdFace size={"10px"} />
                        <p>Skin Expert</p>
                      </HStack>
                      <HStack>
                        <BsVectorPen size={"10px"} />
                        <p>My Reviews</p>
                      </HStack>
                      <HStack>
                        <CiSettings size={"10px"} />
                        <p>Setting</p>
                      </HStack>
                      <HStack>
                        <CiWallet size={"10px"} />
                        <p>Purplle credit</p>
                      </HStack>
                      <HStack>
                        <BsEmojiSmile size={"10px"} />
                        <p>Login or Register</p>
                      </HStack>
                    </VStack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          </Box>
        </Box>

        <HStack
          w={"80%"}
          className={styles.nav}
          display={{ base: "none", md: "flex" }}
        >
          <NavLink to={"/"}>
            <img
              className={styles.logo}
              src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
              alt="Purplle-Beauty"
            ></img>
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
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>Lip Makeup</b>
                              {lipMakeup.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>Eye Makeup</b>
                              {eyemakeup.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
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
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>EYE CARE</b>
                              {eyecare.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>HAND & FOOT CARE</b>
                              {handFootcare.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
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
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>HAIR STYLING & TOOLS</b>
                              {hairStylingTools.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>BY CONCERN</b>
                              {byconcerns.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
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
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>HAIR REMOVAL TOOLS</b>
                              {hairRemovalTools.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>FACE & BODY TOOLS</b>
                              {faceBodyTools.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
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
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>Lip Makeup</b>
                              {lipMakeup.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
                              })}
                            </div>
                            <div>
                              <b>Eye Makeup</b>
                              {eyemakeup.map((el) => {
                                return (
                                  <p className={styles.makeuphover}>{el}</p>
                                );
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
                        borderColor={"Pink"}
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
            <BsHeart size={'35'} style={{ fill: "black" }} />
          </NavLink>
          <div>
            <Popover trigger="hover">
              <PopoverTrigger>
                <span>
                  <BsEmojiSmile size={35} style={{ fill: "black" }} />
                </span>
              </PopoverTrigger>
              <PopoverContent marginTop={"5px"}>
                <PopoverHeader display={"flex"} justifyContent="center">
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
                <PopoverBody>
                  <Stack>
                    <HStack>
                      <p>New Customers</p>
                      <p>Start here</p>
                    </HStack>
                    <div style={{ fontSize: "13px", textAlign: "left" }}>
                      <p>Your Orders</p>
                      <p>Your Accounts</p>
                      <p>Elite Members</p>
                      <p>Your Beauty Profile</p>
                      <p>Your Wishlist</p>
                      <p>Your Credits</p>
                      <p>Become a seller</p>
                      <NavLink to={"/"}>Register Now</NavLink>
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
        </HStack>
      </HStack>

      {isModal2Open ? (
        <Box display={{ md: "none" }}>
          <Drawer isOpen={isModal2Open} placement="left" onClose={closeModal2}>
            <DrawerOverlay />
            <DrawerContent border={"1px solid red"}>
              <DrawerCloseButton />

              <DrawerBody>
                <VStack alignItems={"flex-start"}>
                  <NavLink to={"/"}>
                    <Flex
                      alignItems={"center"}
                      gap="10px"
                      bgColor={"pink.600"}
                      width={"250px"}
                      color="white"
                    >
                      <HiOutlineHome />
                      <b>Home</b>
                    </Flex>
                  </NavLink>
                  <Flex alignItems={"center"} gap={"10px"}>
                    <BsListNested />
                    <select name="" id="">
                      <option value="">Shop By Category</option>
                      <option value="">Makeup</option>
                      <option value="">Skin Care</option>
                      <option value="">Hare Care</option>
                      <option value="">Appliances</option>
                      <option value="">Personal Care</option>
                      <option value="">Men</option>
                      <option value="">Fragrance</option>
                      <option value="">Health & Ewllness</option>
                      <option value="">Mom & Baby</option>
                    </select>
                  </Flex>

                  <NavLink>
                    <Flex alignItems={"center"} gap={"10px"}>
                      <AiOutlineTag />
                      <p>Explore Brands</p>
                    </Flex>
                  </NavLink>
                  <NavLink>
                    <Flex alignItems={"center"} gap={"10px"}>
                      <GiDrippingStar />
                      <p>NewBies</p>
                    </Flex>
                  </NavLink>
                  <NavLink>
                    <Flex alignItems={"center"} gap={"10px"}>
                      <GiDrippingStar />
                      <p>Unque at Purplle</p>
                    </Flex>
                  </NavLink>
                  <NavLink>
                    <Flex alignItems={"center"} gap={"10px"}>
                      <GiDrippingStar />
                      <p>SPLURGE-tHE lUXURY Store</p>
                    </Flex>
                  </NavLink>
                  <NavLink>
                    <Flex alignItems={"center"} gap={"10px"}>
                      <HiOutlineBookOpen />
                      <p>Magazine</p>
                    </Flex>
                  </NavLink>
                  {/* {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                  ))} */}
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
