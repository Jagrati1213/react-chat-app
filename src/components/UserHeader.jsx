import React from 'react'
import { Flex, Text,Avatar, Box, Stack } from '@chakra-ui/react'
import { FaPlus } from "react-icons/fa";
// import { signOut } from 'firebase/auth'
// import { auth } from '../Firebase'
import { IconContext } from 'react-icons';

function UserHeader() {
    const logoutBtn={
        color:'#54656f',
        cursor:'pointer',
        ':hover':{
            bg:'#f0f2f5',
        }
    }
    

  return (
    <Flex  
     alignItems='center' 
     justifyContent='space-between' 
     bg='#f0f2f5' 
     padding='10px' 
     color='white'  
     borderRadius='10px 0 0 0'>

       <Stack alignItems='center' flexDirection='row' wrap='wrap' >
           <Avatar src=''/>
           <Text paddingInlineStart='12px' color={'#54656f'} fontWeight='500'>Jagrati Gupta</Text>
       </Stack>

       <Stack alignItems='center' flexDirection='row' wrap='wrap' >
          <IconContext.Provider value={{size:'20px'}}><FaPlus color='#54656f'/></IconContext.Provider>       
       </Stack>
   
         
    </Flex>
  )
}

export default UserHeader;