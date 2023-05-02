import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Sidebar() {
  return (
    <Box flex='1' bg='#3e3c61' height='-webkit-fill-available'>
         <Navbar/>
         <Search/>
         <Chats/>
    </Box>
  )
}

export default Sidebar