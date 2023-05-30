import { Box } from "@chakra-ui/react";
import React from "react";
import UserHeader from "./UserHeader";
import SearchUser from "./SearchUser";
import UserCard from "./UsersCard";

function Sidebar() {
  return (
    <Box
      flex="1"
      bg="white"
      height="-webkit-fill-available"
      overflow={"hidden"}
      className="sidebar"
    >
      <UserHeader />
      <SearchUser />
      <UserCard />
    </Box>
  );
}

export default Sidebar;
