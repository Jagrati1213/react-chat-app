import { Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import dark from "../Styles/dark.module.scss";
import light from "../Styles/light.module.scss";
import { useSelector } from "react-redux";

function Home() {
  const { mode } = useSelector((state) => state.darkMode);

  return (
    <>
      <Flex
        height="100vh"
        flex="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        flexDirection={"column"}
        className={mode ? dark.dark_mode : light.light_mode}
      >
        <HStack
          height="96%"
          width={{ base: "100%", lg: "80%", xl: "85%" }}
          alignItems="self-start"
          borderRadius="5px"
        >
          <Sidebar />
          <ChatScreen />
        </HStack>
      </Flex>
    </>
  );
}

export default Home;
