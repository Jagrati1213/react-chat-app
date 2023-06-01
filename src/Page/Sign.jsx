import React, { useCallback, useEffect, useState } from "react";
import { SigninAction } from "../Store/slice/AddUserSlice";
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
import { FaImage } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sign() {
  //___ get data from input
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [File, setFile] = useState(null);

  const navigate = useNavigate();

  //____set password visibility
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  //____ used to call methods from reducer
  const dispatch = useDispatch();

  const handlerSubmit = useCallback(
    (event) => {
      event.preventDefault();
      //check is fields empty or not
      if (email === "" || password === "" || displayName === "") {
        return toast.error("add values");
      } else {
        dispatch(
          SigninAction({
            displayName: displayName.trim(),
            email: email.trim(),
            password: password.trim(),
            file: File,
          })
        );
        navigate("/");
        // setDisplayName("");
        // setEmail("");
        // setPassword("");
      }
    },
    [displayName, email, password, File]
  );

  useEffect(() => {}, [dispatch, File]);

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
          {/* name */}
          <div>
            <Input
              type="name"
              placeholder="name"
              value={displayName}
              isRequired
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          {/* email */}
          <div className="mt-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              isRequired
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mt-4">
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

          {/* photo */}
          <div className="mt-4">
            <input
              type="file"
              name="userfile"
              id="userfile"
              style={{ display: "none" }}
              value={""}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="userfile">
              <FaImage
                cursor="pointer"
                fontSize="20px"
                style={{ marginRight: "12px", display: "inline-block" }}
              />
              <span>upload image</span>
            </label>
          </div>

          {/* Add user */}
          <Button
            colorScheme="facebook"
            size="lg"
            className="my-7 w-full"
            onClick={handlerSubmit}
          >
            SignIn
          </Button>
        </form>
      </Box>
    </Flex>
  );
}

export default Sign;
