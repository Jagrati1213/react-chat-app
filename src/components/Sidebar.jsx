import { Box, Button } from "@chakra-ui/react";
import React from "react";
import UserHeader from "./UserHeader";
import SearchUser from "./SearchUser";
import UserCard from "./UsersCard";
import { useDispatch } from "react-redux";
import { removeUser } from "../Store/slice/AddUserSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(removeUser());
  };
  return (
    <Box
      flex="1"
      bg="white"
      height="-webkit-fill-available"
      overflow-x={"hidden"}
      className="sidebar"
    >
      <UserHeader />
      <SearchUser />
      <UserCard />
      <Box h={"auto"} w={"100%"}>
        <Button
          colorScheme="facebook"
          className="w-full"
          borderRadius={"none"}
          onClick={logout}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}

export default Sidebar;
