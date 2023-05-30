import { Stack, Avatar, Text, VStack, HStack, Box } from "@chakra-ui/react";
import React from "react";

function UsersCard() {
  const hideSrollBar = {
    "::-webkit-scrollbar": {
      display: "none",
    },
  };
  return (
    <Stack
      padding="10px"
      spacing="5"
      overflowY="scroll"
      height="82%"
      sx={hideSrollBar}
      className="user_card_box"
    >
      {Array(10)
        .fill(null)
        .map((_, idx) => {
          return (
            <Box key={idx}>
              <HStack cursor={"pointer"}>
                <Avatar name="" src="" />
                <HStack
                  width={"100%"}
                  maxW={"85%"}
                  justifyContent={"space-between"}
                  className="user_card"
                >
                  {/* username & msg */}
                  <VStack
                    padding="6px"
                    alignItems="flex-start"
                    width={"fit-content"}
                    maxW={"60%"}
                    whiteSpace={"nowrap"}
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                  >
                    <Text
                      fontSize="16px"
                      fontWeight="400"
                      className="user_card_name"
                    >
                      Jagrati Gupta
                    </Text>
                    <Text
                      fontSize="14px"
                      fontWeight="400"
                      marginTop="0px"
                      className="user_card_msg"
                    >
                      Message
                    </Text>
                  </VStack>
                  {/* Time */}
                  <Text
                    fontSize="12px"
                    marginTop="0px"
                    className="user_card_msg"
                  >
                    12:09 am
                  </Text>
                </HStack>
              </HStack>
            </Box>
          );
        })}
    </Stack>
  );
}

export default UsersCard;
