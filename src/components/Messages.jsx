import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import "../Styles/Messgaes.css";

function Messages({ user }) {
  return (
    <Flex
      className={`messages ${
        user === "sender" ? (user = "sender") : (user = "me")
      }`}
      gap={10}
      marginBottom="1.5rem"
      alignItems="flex-end"
    >
      {/* UserName & time */}
      <Box className="msg_info" color="gray.900" fontWeight="300">
        <Avatar />
        <Text fontSize="12px" fontWeight="500">
          just Now
        </Text>
      </Box>

      {/* User msg */}
      <Box className="msg_content ">
        <Image
          as="img"
          width="80%"
          borderRadius="5px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
        />
        <Text as="p" padding="8px 20px" borderRadius="0 10px 10px 10px">
          Hello
        </Text>
      </Box>
    </Flex>
  );
}

export default Messages;
