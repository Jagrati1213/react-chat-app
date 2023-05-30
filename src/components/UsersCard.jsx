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
                  borderBottom="1px solid #e9edef"
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
                    <Text fontSize="16px" fontWeight="400" color="black">
                      Jagrati Gupta
                    </Text>
                    <Text
                      fontSize="14px"
                      color="gray"
                      fontWeight="400"
                      marginTop="0px"
                    >
                      Message
                    </Text>
                  </VStack>
                  {/* Time */}
                  <Text fontSize="12px" color="gray" marginTop="0px">
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
