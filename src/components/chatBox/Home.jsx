import { Flex, Container, Box, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'

function Home() {
  return (
    <>
       <Flex height='100vh' flex='flex' justifyContent='center' alignItems='center' overflow='hidden' bg='#706f8bfa'>

         <HStack height='80%' width={{base:'90%', lg:'80%', xl:'60%'}} alignItems='self-start' >
               <Sidebar/>
                <Chat/>
            </HStack>
       </Flex>
    </>
  )
}

export default Home