import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function Login() {
  //___ get data from input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //____set password visibility
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //____ used to call methods from reducer
  const dispatch = useDispatch();

  const handlerSubmit = useCallback(
    (event) => {
      event.preventDefault();
      //check is fields empty or not
      if (email === "" || password === "") {
        return toast.error("add values");
      } else {
        setEmail("");
        setPassword("");
      }
    },
    [email, password]
  );
  useEffect(() => {}, [dispatch]);

  return (
    <Flex
      className="pt-10"
      justifyContent={"center"}
      alignItems={"center"}
      bg={"facebook.400"}
      height={"100vh"}
    >
      <Box className="px-10 py-8 bg-white rounded-tr-4xl  shadow-xl  rounded-3xl overflow-hidden">
        <h1 className="md:text-2xl text-xl font-semibold text-slate italic text-center">
          Join Mag's chat
        </h1>

        <form className="mt-8">
          {/* email */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              isRequired
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mt-8">
            <InputGroup size="md">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem" onClick={handleClick}>
                {show ? <ViewIcon /> : <ViewOffIcon />}
              </InputRightElement>
            </InputGroup>
          </div>

          {/* Add user */}

          <Button
            colorScheme="facebook"
            size="lg"
            className="my-7 w-full"
            onClick={handlerSubmit}
          >
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default Login;
