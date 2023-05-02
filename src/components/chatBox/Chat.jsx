import { Box, Flex,Stack,Avatar,Text } from '@chakra-ui/react'
import React from 'react'
import Messages from './Messages';
import SendInput from './SendInput';
import '../../Styles/Messgaes.css';


function Chat() {
  const hideSrollBar={
    '::-webkit-scrollbar':{
        display:'none'
    }
}
  return (
    <Box flex='2' style={{marginLeft:'0%'}} bg='white' height='-webkit-fill-available'>
      <Flex alignItems='center' justifyContent='space-between' bg='#5d5b8e'  padding='10px' color='white' >

        <Stack alignItems='center' flexDirection='row' wrap='wrap' >
          <Avatar bg='purple.900'/>
            <Text paddingInlineStart='12px'>Jagrati Gupta</Text>
        </Stack>
      </Flex>
      <Box className='messages_box' overflowY='scroll' sx={hideSrollBar} padding='1.2rem'>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
         <Messages/>
      </Box>
     <SendInput/>
    </Box>
  )
}

export default Chat