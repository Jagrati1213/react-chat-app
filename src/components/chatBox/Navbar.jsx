import { Button, Flex, Text,Avatar, Box, Stack } from '@chakra-ui/react'
import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../../Firebase'

function Navbar() {
    const logoutBtn={
        bg:'#5d5b8d',
        color:'white',
        cursor:'pointer',
        ':hover':{
            bg:'#5d5b8db0',
        }
    }
  return (
    <Flex alignItems='center' justifyContent='space-between' bg='#2f2d52' padding='10px' color='white' >

       <Stack alignItems='center' flexDirection='row' wrap='wrap' >
           <Avatar src='' bg='purple.800'/>
           <Text paddingInlineStart='12px'>Jagrati Gupta</Text>
       </Stack>

        <Button sx={logoutBtn} onClick={()=> signOut(auth)}>logout</Button>
         
    </Flex>
  )
}

export default Navbar