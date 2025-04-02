import React, { useState , useRef } from "react";
import  { Text } from "@chakra-ui/react";
import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import Motive from "../components/Motive/Motive";

import {
  Box,
  Flex,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Container,
  VStack,
  Image,
  HStack,
} from "@chakra-ui/react";
import Auth from "./Authentication/Auth";

import Features from "./Features/Features";
import Solutions from "./Solutions/Solutions";
import About from "./About/About";
// import { px } from "framer-motion";

import Testimony from "./Testimony/Testimony ";
import headerp from './../assets/headp.png'
import header from './../assets/header.png'

// import headertitle from './../assets/cinch..png'
import { Contact } from "./Contact/Contact";
import ContactPage from "./ContactPage/ContactPage";
import { ScrollLink } from "react-scroll";




const Home = () => {

  const { isOpen, onClose } = useDisclosure();
  const [index] = useState();
  
 
 
 


  return (
    <div className={styles.pageWrapper}>
     
       <div className={styles.headerWrapper}>
        
        <Image src={header} alt="Cinch Header" id="home" className={styles.headerImage} />
        {/* <Image src={headertitle}  className={styles.headerTitleImage} /> */}
        
      </div>
    <Box>
      {/* Main Content */}
      <Container maxW="container.xl" py={20} >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center" // Center horizontally
          // minHeight="calc(85vh - 20px)" // Full viewport height minus header/footer space
          textAlign="center"
        >
          <VStack
            align="start"
            spacing={6}
            maxW="600px"
            mb={{ base: 10, lg: 0 }}
            textAlign={{ base: "center", lg: "left" }} // Adjust for responsiveness
          >
          
             
            {/* <Text
              // fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              lineHeight="1.2"
              color= "#333"
              className={styles["home-up-text"]}

            >
               Innovate, Automate, Elevate 
            </Text> */}
            <h1 className="main-heading">
            <span className="sas">I</span>
            <span>nnovate, </span>
            <span className="sas">A</span>
            <span>utomate, </span>
            <span className="sas">E</span>
            <span>levate </span>
          {/* <span>It Now !</span> */}
           </h1>
            
            <Text fontSize="xl"
              className={styles["description"]}
            >
            Cinch provides customised Ai solutions for streamlining your business  operations! With a focus on innovation, we promise to deliver efficiency with smart solutions.
            </Text>
            <HStack spacing={4} justify="center">
            


              {/* <Button
                  variant="outline"
                  size="lg"
                  className={styles["buttons"]}
                  as={Link}
                  to={Motive}
                >
                  Watch Demo
                </Button> */}
              <Button
  variant="outline"
  size="lg"
  className={styles["buttons"]}
  onClick={() => document.getElementById("motive-section").scrollIntoView({ behavior: "smooth" })}
>
  Watch Demo
</Button>




               


            

                        </HStack>
          </VStack>
              
            <Image 
            width={{ base: "100%", lg: "50%" }}
            style={{ marginLeft: "7rem" }}
            height="400px"
            src={headerp} alt="Cinch Header" className={styles.headerImage} />
        </Flex>
      </Container>
      <div>
      <Motive/> 
      <Features/> 
      <Solutions/> 
      <Testimony/> 

      <About/> 
      <ContactPage />
      <Contact/>
      
      

    </div>

    <div>
  
      {/* Footer */}
      <Text
        fontSize="sm"
        position="fixed"
        bottom={1}
        left="50%"
        transform="translateX(-50%)"
        mt={4}
        textAlign="center"
      >
        
      </Text>
  
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
    </div>
    </Box>
    </div>
  );  
};

export default Home;