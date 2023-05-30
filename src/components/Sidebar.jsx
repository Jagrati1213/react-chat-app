import { Box } from '@chakra-ui/react'
import React from 'react'
import UserHeader from './UserHeader'
import SearchUser from './SearchUser'
import UserCard from './UsersCard'

function Sidebar() {
  return (
    <Box flex='1' bg='white' height='-webkit-fill-available' borderRadius='5px' borderRight={'1px solid lightgray'}>
         <UserHeader/>
         <SearchUser/>
         <UserCard/>
    </Box>
  )
}

export default Sidebar