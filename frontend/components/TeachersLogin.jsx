import React, { useState } from "react";
import { FormControl, FormLabel, Button, Text, Link } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TeachersLogin = () => {
  const navigate = useNavigate();
  const Toast = useToast();
  const [change, setchange] = useState();
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [UID, setUID] = useState("");

  const handleClick = () => setshow(!show);
  const submitHandler = async (e) => {
    e.preventDefault();
    setloading(true);
    if (!UID || !email || !password) {
      Toast({
        title: "please fill all fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
      return;
    }
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/signin/teacher",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UID,
          email,
          password,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      Toast({
        title: "OOPS !!",
        description: data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Congratulations",
        description: data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate("/mainpage");
      localStorage.setItem("user", data.UID);
      localStorage.setItem("type", data.type);
    }
    setloading(false);
  };

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="UID" isRequired>
        <FormLabel>UID</FormLabel>
        <Input
          type="number"
          placeholder="Enter your UID"
          value={UID}
          onChange={(e) => setUID(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        ></Input>
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="5m" bg="white" onClick={handleClick}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>

      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={(e) => {
          setUID("123456");
          setemail("guestuser@gmail.com");
          setpassword("12345678");
          submitHandler(e);
        }}
      >
        Login as guest user
      </Button>
    </VStack>
  );
};

export default TeachersLogin;
