import { Box, Flex, Stack, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import Messages from "./Messages";
import SendInput from "./SendInput";
import "../Styles/Messgaes.css";

function ChatScreen() {
  const hideSrollBar = {
    "::-webkit-scrollbar": {
      display: "none",
    },
  };
  return (
    <Box
      flex="2"
      style={{ marginLeft: "0%" }}
      bg="white"
      height="-webkit-fill-available"
      borderRadius="0 6px 0 0"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        bg="#f0f2f5"
        padding="10px"
        color="black"
        borderRadius="0 6px 0 0"
      >
        <Stack alignItems="center" flexDirection="row" wrap="wrap">
          <Avatar />
          <Text paddingInlineStart="12px">Jagrati Gupta</Text>
        </Stack>
      </Flex>

      <Box
        className="messages_box"
        overflowY="scroll"
        sx={hideSrollBar}
        bg="#f2eee8"
        padding="1.2rem"
      >
        <Messages />
        <Messages user={"sender"} />
        <Messages />
      </Box>
      <SendInput />
    </Box>
  );
}

export default ChatScreen;
