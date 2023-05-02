import { InputGroup,InputLeftElement,Input } from '@chakra-ui/react'
import {  PhoneIcon, SearchIcon} from "@chakra-ui/icons";
import React from 'react'

function Search() {
  return (
    <InputGroup marginY='.5rem'>
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    <Input type='text' placeholder='Find a user' variant='flushed' focusBorderColor='whiteAlpha.600' color='whiteAlpha.800' />
  </InputGroup>
  )
}

export default Search