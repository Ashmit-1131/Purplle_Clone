import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
 
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
  InputRightElement
} from "@chakra-ui/react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";
import { BsSearch, BsHeart, BsEmojiSmile, BsCart4 } from "react-icons/bs";
import { RxCross2 } from "react-icons/bs";


const Navbar = () => {
  let activeStyle = {
    textDecoration: "none",
    color: "green",
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className={styles.navwrap}>
      <div className={styles.nav}>
        <NavLink to={"/"}>
          <img
            className={styles.logo}
            src="https://media6.ppl-media.com/static/purplle/img/purplle-logo-1.svg"
            alt=""
          />
        </NavLink>
        <div>
          <span>SHOP CATEGORIES </span>
        </div>
        <NavLink to={"/brands"}>BRANDS </NavLink>
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
                   variant='flushed'
                    type="search"
                    placeholder="Search for Products and Brands"
                  />
                    <InputRightElement children={<BsSearch color='pink.200' />} />
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
          <span>
            <BsEmojiSmile size={35} style={{ fill: "black" }} />
          </span>
        </div>
        <div>
          <span>
            <BsCart4 size={35} style={{ fill: "black" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
