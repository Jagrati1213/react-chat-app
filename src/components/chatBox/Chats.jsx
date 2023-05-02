import { Stack, Avatar,Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

function Chats() {

    const hideSrollBar={
        '::-webkit-scrollbar':{
            display:'none'
        }
    }
  return (
    <Stack padding='8px' spacing='5' overflowY='scroll'  height='82%' sx={hideSrollBar}>

        <HStack>
           <Avatar name='' src=''bg='purple.900' />
           <VStack paddingInlineStart='6px'  alignItems='flex-start'>
              <Text fontSize='16px' fontWeight='400' color='white'>Jagrati Gupta</Text>
              <Text fontSize='14px' color='lightgray' marginTop='0px'>Message</Text>
           </VStack>
        </HStack>

        <HStack>
           <Avatar name='' src=''bg='purple.900' />
           <VStack paddingInlineStart='6px'  alignItems='flex-start'>
              <Text fontSize='16px' fontWeight='400' color='white'>Jagrati Gupta</Text>
              <Text fontSize='14px' color='lightgray' marginTop='0px'>Message</Text>
           </VStack>
        </HStack>

    </Stack>
  )
}

export default Chats