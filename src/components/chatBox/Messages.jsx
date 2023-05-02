import { Avatar, Box,Flex,Image,Text } from '@chakra-ui/react';
import React from 'react';
import '../../Styles/Messgaes.css';

function Messages() {
  return (
    <Flex className='messages owner' gap={10} marginBottom='1.5rem' alignItems='flex-end'>
       
       <Box className='msg_info' color='gray.900' fontWeight='300'>
           <Avatar/>
           <Text fontSize='12px' fontWeight='500'>just Now</Text>
       </Box>

       <Box className='msg_content'>
           <Image width='80%' borderRadius='5px'  objectFit='cover' src='https://bit.ly/dan-abramov'/>
           <Text as='p' bg='white' padding='10px 20px' borderRadius='0 10px 10px 10px'>Hello</Text>
       </Box>

    </Flex>
  )
}

export default Messages