import React from 'react'
import Applicaties from "../components/Applicaties";
import Social from "../components/Social";
import Header from "../components/Header";

import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'



function Portfolio() {
   
  return (
    
    <VStack bgGradient="linear(to-r, blue.400, blue.700, gray.700)" p={5}>
        <Header />
    <Social></Social>
      <Applicaties />
      </VStack>
  )
}

export default Portfolio