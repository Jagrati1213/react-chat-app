import { Stack, Avatar,Text, VStack, HStack } from '@chakra-ui/react'
import React from 'react'

function UsersCard() {

    const hideSrollBar={
        '::-webkit-scrollbar':{
            display:'none'
        }
    }
  return (
    <Stack padding='10px' spacing='5' overflowY='scroll'  height='82%' sx={hideSrollBar}>
      {
         Array(10).fill(null).map((_,idx)=> {
          return( <HStack key={idx}>
               <Avatar name='' src='' />
               <VStack padding='6px'  alignItems='flex-start' borderBottom='1px solid #e9edef' w={'100%'}>
                  <Text fontSize='16px' fontWeight='500' color='black'>Jagrati Gupta</Text>
                  <Text fontSize='14px' color='gray'fontWeight='500' marginTop='0px'>Message</Text>
               </VStack>
            </HStack>
          )
         })
      }
    </Stack>
  )
}

export default UsersCard