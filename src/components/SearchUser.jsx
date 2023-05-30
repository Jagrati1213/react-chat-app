import { InputGroup,InputLeftElement,Input } from '@chakra-ui/react'
import {  SearchIcon} from "@chakra-ui/icons";
import React from 'react'

function SearchUser() {
  return (
    <InputGroup marginY='.5rem' bg='white' padding={'0 10px'}>
    <InputLeftElement
      pointerEvents='none'
      padding={'0 0 0 12px'}
      children={<SearchIcon color='#54656f' />}
    />
    <Input type='text' 
    placeholder='Find a user' 
    variant='flushed' 
    color='black'
    bg='#f0f2f5' 
    w={'100%'} 
    focusBorderColor='gray.100'
    borderRadius={'10px'} />
  </InputGroup>
  )
}

export default SearchUser