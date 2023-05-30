import { Flex, HStack, } from '@chakra-ui/react'
import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatScreen from '../components/ChatScreen'

function Home() {
  return (
    <>
       <Flex 
          height='100vh' 
          flex='flex' 
          justifyContent='center' 
          alignItems='center' 
          overflow='hidden' 
          bg='linear-gradient(to bottom, #00a884 16%, #eae6df 0%)'>

         <HStack height='96%' width={{base:'100%', lg:'80%', xl:'85%'}} alignItems='self-start' borderRadius='5px'>
                <Sidebar/>
                <ChatScreen/>
            </HStack>
       </Flex>
    </>
  )
}

export default Home