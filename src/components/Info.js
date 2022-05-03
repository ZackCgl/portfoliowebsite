import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Info() {

   
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    let navigate = useNavigate();


    return (
        <Stack>
            
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start" >
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, my name is</Text>
                    <Text fontSize="7xl" fontWeight="bold" 
                    bgGradient="linear(to-r, white, gray.400, white)" bgClip='text'>Mark Teekens</Text>
                    <Text color="white">
                        I'm a developer and I can create different applications for businesses.
                        </Text>
                        <Text color="white">
                        If you'd like to know more about me, watch below here.</Text>
                    <Button mt={8} colorScheme="gray" onClick={() =>
                        window.open("https://www.linkedin.com/in/mark-teekens-8b3040190/")
                    }>Hire Me</Button>
                    <Button ml="5" mt={8} colorScheme="gray" onClick={() => {
                        navigate("/Portfolio");
                    }}> My Portfolio </Button>
                    <Button ml="5" mt={8} colorScheme="gray" onClick={() => {
                        navigate("/About");
                    }}> About Me </Button>
                    

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent"
                    boxSize="250px" src='https://i.ibb.co/2dQkL8D/1650845771146.jpg' />
            </Flex>

        </Stack>
    )
}

export default Info