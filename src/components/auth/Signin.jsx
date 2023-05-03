import {Flex, Text, Heading, Input, Stack, Button } from '@chakra-ui/react';
import { FaImage } from "react-icons/fa";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth,storage,db } from '../../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc,addDoc,collection } from "firebase/firestore"; 

function Signin() {

  const SignBtn ={
    color:'white',
    bg:'#323232',
    w:'100%',
    ':hover':{
      bg:'#323232d9'
    }
  }
 
   const [err, setErr] = useState(false);

   const handleSignin = async (e)=>{

      e.preventDefault();  
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

  }
   
  return (
     <Stack as='section' flex='flex' justifyContent='center' alignItems='center' height='100vh' bg='#DDD0C8' mx='auto'>

      <Flex bg='white' boxShadow='inner' borderRadius='10px' wrap='wrap' gap='15' alignItems='center' p='3rem 60px' justifyContent='center' w={{base:'90%',md:'450px'}}>

          <Heading as='h3'fontSize='2rem'width='100%'textAlign='center'color='#323232' >
              Let's Chat
          </Heading>

            <Text textAlign='center' color='#323232' fontWeight='medium'>
              Register
            </Text> 

            <form onSubmit={handleSignin}>
                  <Input placeholder='display name' variant='flushed' my='7px' focusBorderColor='#323232' type='text'/>

                  <Input placeholder='email' variant='flushed' my='7px' focusBorderColor='#323232' type='email'/>

                  <Input placeholder='password' variant='flushed' my='7px' focusBorderColor='#323232' type='password'/>

                  <Input type='file' name='avatar'  id='avatar' style={{display:'none'}}/>

                  <label htmlFor="avatar" style={{width:'100%', display:'flex', alignItems:'center', margin:'1rem'}}>
                    <FaImage style={{marginRight:'12px'}}/> Choose Avatar
                    </label>
                
                <Button sx={SignBtn} type='submit'>Sign Up</Button>
                {
                  err && <span style={{margin:'10px 0', fontSize:'12px'}}>Somthing went wrong</span>
                }
            </form>

            <Text > You do have an account?
               <span style={{margin:'0 5px', color:'#323232', fontWeight:'bold', cursor:'pointer'}}>
               <Link to= '/login'>LogIn</Link>
              </span>
            </Text>
        </Flex>
     </Stack>
  )
}

export  {Signin};