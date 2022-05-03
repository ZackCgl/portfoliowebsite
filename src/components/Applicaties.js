import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/button';


function Applicaties() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    let navigate = useNavigate();


    return (
        
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "170vh" }}>
            
            <Box alignSelf="center" px="27" py="16">
                <Flex direction={isNotSmallerScreen ? "row" : "column"}>
                <Text fontWeight="bold" fontSize="2xl">My Portfolio</Text>
                <Button ml="5" mt={0} colorScheme="gray" onClick={() => {
                        navigate("/");
                    }}
                    >
                        
                        Go back
                    </Button>
                    </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}  >
                    <Flex onClick={() =>
                        window.open("https://rubyfinance.nl")
                    } rounded="xl" direction="column" mt={4} bgImage="https://i.ibb.co/k4hdLrt/Screenshot-1.png" h="25vh" w="25vh" justify="flex-end" _hover={{  opacity: 0.5}}>
                        
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Ruby Finance
                        </Text>
                    </Flex>
                    <Flex onClick={() =>
                        window.open("https://mark-ting.nl")
                    } rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bgImage="https://i.ibb.co/sgGfFWJ/downloaden.png" h="25vh" w="25vh" justify="flex-end" _hover={{ bg: "blue.700", }}>
                        
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Mark-Ting
                        </Text>
                    </Flex>
                    <Flex onClick={() =>
                        window.open("https://meta-buddies.io")
                    } rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bgImage="https://i.ibb.co/vsCWjDJ/Screenshot-8.png" h="25vh" w="25vh" justify="flex-end"
                        _hover={{ bg: "red.800", }}

                    >
                        
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Chewies United
                        </Text>
                    </Flex>

                    
                </Flex>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    
                    <Flex onClick={() =>
                        window.open("https://onlinewithyou.nl")
                    } rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bgImage="https://i.ibb.co/vV7SK9L/Screenshot-2.png" h="25vh" w="25vh" justify="flex-end" _hover={{ bg: "blue.700", }}>
                        
                        <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                            Online with you
                        </Text>
                    </Flex>
                    
                    
                    
                </Flex>

            </Box>
        </Flex>
    )
}

export default Applicaties