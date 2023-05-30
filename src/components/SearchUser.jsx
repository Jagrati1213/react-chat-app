import { InputGroup, InputLeftElement, Input, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

function SearchUser() {
  return (
    <Stack paddingY={".5rem"} className="search_box">
      <InputGroup padding={"0 10px"}>
        <InputLeftElement
          pointerEvents="none"
          padding={"0 0 0 12px"}
          children={<SearchIcon color="#54656f" />}
        />
        <Input
          className="search_input"
          type="text"
          placeholder="Find a user"
          variant="flushed"
          focusBorderColor="transparent"
          w={"100%"}
          borderRadius={"10px"}
        />
      </InputGroup>
    </Stack>
  );
}

export default SearchUser;
