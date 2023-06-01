import React, { useState } from "react";
import { Flex, Text, Avatar, Stack, Box } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { SetSwitch } from "../Store/slice/DarkModeSlice";

function UserHeader() {
  const [isCheck, setIsCheck] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.users);

  const handleSwitch = () => {
    isCheck ? setIsCheck(false) : setIsCheck(true);
    dispatch(SetSwitch(isCheck));
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="10px"
      className="user_header"
    >
      <Stack alignItems="center" flexDirection="row" wrap="wrap">
        <Avatar src={currentUser.photoURL} />
        <Text
          className="user_name"
          paddingInlineStart="12px"
          color={"#54656f"}
          fontWeight="500"
        >
          {currentUser.displayName}
        </Text>
      </Stack>

      <Stack
        alignItems="flex-end"
        flexDirection="row"
        wrap="wrap"
        justifyContent={"center"}
      >
        <Box onClick={handleSwitch} margin={"0 12px"} cursor={"pointer"}>
          <IconContext.Provider value={{ size: "20px" }}>
            {isCheck ? (
              <BsFillMoonStarsFill color="#54656f" />
            ) : (
              <BsFillSunFill className="icons" />
            )}
          </IconContext.Provider>
        </Box>

        <IconContext.Provider value={{ size: "20px" }}>
          <FaPlus className="icons" />
        </IconContext.Provider>
      </Stack>
    </Flex>
  );
}

export default UserHeader;
