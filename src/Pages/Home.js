import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Info from "../components/Info";
import Profile from "../components/Profile";
import Social from "../components/Social";
import Header from "../components/Header";
import { Navigate } from 'react-router-dom';




function Home() {

  return (
      
    <VStack bgGradient="linear(to-r, blue.400, blue.700, gray.700)" p={5}>
      
      <Header />
      <Info></Info>
      <Social></Social>
      <Profile></Profile>
      
    </VStack>
  )
}

export default Home