import {Flex, Text, Heading, Input, Stack, Button } from '@chakra-ui/react';
import React from 'react';

function Login() {

  const SignBtn ={
    color:'white',
    bg:'#323232',
    w:'100%',
    ':hover':{
      bg:'#323232d9'
    }
  }
  return (
     <Stack as='section' flex='flex' justifyContent='center' alignItems='center' height='100vh' bg='#DDD0C8' mx='auto'>

      <Flex 
        bg='white' 
        boxShadow='inner' 
        borderRadius='10px' 
        wrap='wrap' gap='15' 
        alignItems='center' 
        p='3rem 60px' 
        justifyContent='center'
        w={{
          base:'90%',
          md:'450px'
        }}>

          <Heading as='h3'
            fontSize='2rem'
            width='100%'
            textAlign='center'
            color='#323232' 
            >
              Let's Chat
          </Heading>

            <Text 
            textAlign='center' 
            color='#323232' fontWeight='medium'>
              Login
            </Text> 

            <Input placeholder='email' variant='flushed' my='7px' focusBorderColor='#323232' type='email'/>

            <Input placeholder='password' variant='flushed' my='7px' focusBorderColor='#323232' type='password'/>
          
           <Button sx={SignBtn}>Sign Up</Button>
            <Text > 
               have No account?
              <span style={{margin:'0 5px', color:'#323232', fontWeight:'bold', cursor:'pointer'}}>SignIn</span>
            </Text>
        </Flex>
     </Stack>
  )
}

export  {Login};