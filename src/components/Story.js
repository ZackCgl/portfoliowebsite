
import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform,  } from 'react-icons/di'
import { FaEthereum  } from 'react-icons/fa'
import { MdApps, MdWeb  } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { useColorMode } from "@chakra-ui/color-mode";

function Story() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    let navigate = useNavigate();
  
  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "170vh" }}>
    <Box alignSelf="center" px="27" py="16">
    <Flex direction={isNotSmallerScreen ? "row" : "column"}>
        <Text ml="0" fontWeight="bold" fontSize="2xl">About me</Text>
            <Button ml="5" mt={0} colorScheme="gray" onClick={() => {
            navigate("/");
            }}>Go back
            </Button>
            
    </Flex>
    
        <Box alignSelf="center" px="30" py="16">
                
            <Text fontSize="1xl" color="white">Hi, My name is Mark Teekens, 
            I live in the Netherlands. My native language is Dutch, and my second language is English. 
            My passion has always been learning new stuff on the internet, this was always enjoyable for me.
            </Text>
            <Text mt="5"fontSize="1xl" color="white">
                I'm able to build a variety of things. First of all I can make simple web-applications. 
                I've created many websites myself, for small companies, but also for bigger companies. 
            </Text>

            <Text mt="5"fontSize="1xl" color="white">
            In the next stages of my career, I started using react.js librararies. This helped me tremendously 
            with speeding up the work, but also the website itself is alot more structured. itself is more user friendly in multiple aspects.
            In early 2021, I joined the crypto space, and started working with crypto related projects and businesses. 
            I learned myself Solidity, and some important blockchain networks including layers. I was doing some work to sell smart-contracts for crypto projects. 
            By that time meme-coins were really a trend, following by the second ever NFT hype.
            Later I started to create platforms with decentralised applications.

            </Text>
            <Text mt="5"fontSize="1xl" color="white">
           Learning new things is something I really like, I feel that most others are stuck finding what they really want to do in life. 
           However we all need to do what we love, and thats what passion is for. 
            

            </Text>
            <Text mt="5"fontSize="1xl" color="white">
            So that's a small summary of my story, if you'd like to know more about me send me a msg on Linked-In.

            </Text>
            <Text mt="5"fontSize="1xl" color="white">
            Node.js, Solidity, React.js, Chakra ui, Css, Bootstrap,
            Javascript, Html, Ethereum, Hardhat, Git, vscode, blockchain, Moralis, Smart-contracts, 
            Api, Npm, Vmware, Kali Linux, Windows, Bash, Python, Bootstrap, Nessus, metasploit, 
            active directory, three.js, remix, Burpsuite, searchsploit.
           
        </Text>
        </Box>
        </Box>
    </Flex>
    
    
  )
}

export default Story