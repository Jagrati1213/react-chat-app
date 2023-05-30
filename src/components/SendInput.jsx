import { Flex, HStack, Input, Button } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";
import React from "react";
import "../Styles/Send.css";

function SendInput() {
  return (
    <Flex className="send_box" justifyContent="space-between" bg="#f0f2f5">
      <Input
        placeholder="send massges.."
        variant="unstyled"
        width="100%"
        color="#2f2d52"
        fontSize="18px"
        bg={"white"}
        padding={"0 12px"}
      />

      <HStack className="send" alignItems="center" gap={3}>
        <Input type="file" name="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <FaImage cursor="pointer" color="#98969f" fontSize="20px" />
        </label>
        <Button colorScheme="whatsapp">Send</Button>
      </HStack>
    </Flex>
  );
}

export default SendInput;
