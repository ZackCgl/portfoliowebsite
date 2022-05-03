import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Info from "../components/Info";
import Profile from "../components/Profile";
import Social from "../components/Social";
import { useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

function Header() {
  let navigate = useNavigate();
  return (
      
    <Flex w="100%">
        <Heading
          ml="8" size="md" bgGradient="linear(to-r, white, gray.400, white)" bgClip='text' 
          fontFamily="sans-serif" fontSize="25px" 
          fontWeight='semibold' borderStyle="none"  
          borderWidth="0px" onClick={() => {
            navigate("/");
        }}>ZC</Heading>

        <Spacer></Spacer>
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={() =>
                        window.open("https://www.linkedin.com/in/mark-teekens-8b3040190/")
                    }></IconButton>
        
        
      </Flex>
      
  )
}

export default Header