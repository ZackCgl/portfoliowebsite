import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform,  } from 'react-icons/di'
import { FaEthereum  } from 'react-icons/fa'
import { MdApps, MdWeb  } from 'react-icons/md'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "170vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="bold" color="white" size="3xl">
                    4+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Blockchain Developer, Front-end Developer</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="gray.200" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "gray", }}>
                        <Icon color="black" p="4" as={FaEthereum} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Smart-Contracts
                        </Text>
                    </Flex>
                    <Flex  rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="yellow" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "gray", }}>
                        <Icon color="black" p="4" as={MdApps} w="24" h="24" />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            D-Apps
                        </Text>
                    </Flex>
                    <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                        bg="gray.400" h="30vh" w="30vh" justify="flex-end"
                        _hover={{ bg: "gray", }}

                    >
                        <Icon color="black" as={MdWeb} p="4" w="24" h="24"  />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Web Apps
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default Profile