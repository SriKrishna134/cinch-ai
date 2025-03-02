import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import bg from '../../assets/image.jpg'

import bgw from '../../assets/logobg.png'

import './Navbar.css';
import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  useDisclosure,
  Image,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ProfileMenu from "./ProfileMenu";
import CinchBulbLogo from "../../assets/logo.jpg";
import Auth from "../Authentication/Auth";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [menu,setMenu] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState();
  const navigate = useNavigate();

  const handleloginopen = () => {
    setIndex(0);
    onOpen();
  };

  const handlesignupopen = () => {
    setIndex(1);
    onOpen();
  };

  return (
    <>
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        p={4}
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.100"
        zIndex={1000}
      >
         <Image src={bg} className="ctit"/>
        <Flex justify="space-between" align="center" maxW="1280px" mx="auto">
          {/* Logo */}
          <Flex align="center" gap={2}>
            <Image src={bgw} alt="Cinch Logo" className="bfgp"/>
            <Text fontSize="lg" fontWeight="semibold">
              
            </Text>
          </Flex>

          {/* Navigation Links */}
          <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <ul className="navbar-menu">
      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70} // Adjust for sticky navbar
        activeClass="active"  // Add this line

        onClick={() => setMenu("home")}
        className={menu === "home" ? "active" : ""}
      >
        Home
      </ScrollLink>

      <ScrollLink
        to="motive"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onClick={() => setMenu("motive")}
        className={menu === "motive" ? "active" : ""}
      >
        Motive
      </ScrollLink>

      <ScrollLink
        to="features"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onClick={() => setMenu("features")}
        className={menu === "features" ? "active" : ""}
      >
        Features
      </ScrollLink>

      <ScrollLink
        to="solutions"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onClick={() => setMenu("solutions")}
        className={menu === "solutions" ? "active" : ""}
      >
        Solutions
      </ScrollLink>

      <ScrollLink
        to="testimony"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onClick={() => setMenu("testimony")}
        className={menu === "testimony" ? "active" : ""}
      >
        Testimony
      </ScrollLink>

      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onClick={() => setMenu("about")}
        className={menu === "about" ? "active" : ""}
      >
        About
      </ScrollLink>

      {/* <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
        onClick={() => setMenu("contact")}
        className={menu === "contact" ? "active" : ""}
      >
        Contact
      </ScrollLink> */}
    </ul>
          </HStack>

          {/* Auth Buttons */}
          <HStack spacing={4}>
            {/* <Button 
            color="white"
            variant="ghost" 
            onClick={handleloginopen}
            _hover={{ bg: "transparent", color: "white" }} 
            >
              
              Sign In
            </Button> */}
            {/* <Button
              bg="#1ca884"
              color="white"
              onClick={() => navigate("/contactpage")}
              width="120px"
              _hover={
                
                { bg: "#000000d2",
                  transition: "1s"
                 }
              }
            >
              Get Started
            </Button> */}
              <ScrollLink
              to="contactpage"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              onClick={() => setMenu("contact")}
              className={`scroll-button ${menu === "contact" ? "active" : ""}`}
            >
              Get Started
            </ScrollLink>

          </HStack>
          {localStorage.getItem("token") && (
            <ProfileMenu
              context={props.context}
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
            />
          )}
        </Flex>
      </Box>

      {/* Modal for Login/Signup */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="red"
        size={{ base: "md", md: "xl" }}
      >
        <ModalOverlay />
        <ModalContent w={{ base: "95vw" }}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <Auth tabindex={index} />
          </ModalBody>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Navbar;
