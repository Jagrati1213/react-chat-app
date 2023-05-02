import { Box, Flex, HStack, Input,Button } from '@chakra-ui/react'
import { AttachmentIcon } from '@chakra-ui/icons'
import { FaImage } from "react-icons/fa";
import React from 'react';
import '../../Styles/Send.css';

function SendInput() {
  return (
    <Flex className='send_box' justifyContent='space-between'>
        <Input placeholder='send massges..' variant='unstyled' width='100%' color='#2f2d52' fontSize='18px'/>
        
        <HStack className='send' alignItems='center' gap={3}>
            {/* <AttachmentIcon cursor='pointer' color='#98969f' fontSize='20px'/> */}
            <Input type="file" name="file" id='file' style={{display:'none'}}/>
            <label htmlFor="file">
              <FaImage cursor='pointer' color='#98969f' fontSize='20px'/>
            </label>
            <Button colorScheme='purple'>Send</Button>
       </HStack>
       
    </Flex>
  )
}

export default SendInput