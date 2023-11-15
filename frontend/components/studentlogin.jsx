import React, { useState } from "react";
import { FormControl, FormLabel, Button } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Studentlogin = () => {
  const [show, setshow] = useState(false);
  const [user, setuser] = useState({
    email: "",
    Id_no: "",
    password: "",
  });
  // const [pic,setpic] = useState();
  const [loading, setloading] = useState(false);
  const Toast = useToast();
  const navigate = useNavigate();

  let name, value;
  const change = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const handleClick = () => setshow(!show);

  const submitHandler = async () => {
    setloading(true);
    if (!user.email || !user.password || !user.Id_no) {
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
    const { Id_no, email, password } = user;
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/signin/student",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Id_no, email, password }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      Toast({
        title: "OOPS...  An error Occured",
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
      localStorage.setItem("user", data.Id_no);
      localStorage.setItem("type", data.type);
    }
    setloading(false);
  };

  return (
    <>
      <VStack spacing="5px" color="black">
        <FormControl id="Id No" isRequired>
          <FormLabel>Id no</FormLabel>
          <Input
            type="number"
            placeholder="enter your ID No"
            onChange={change}
            value={user.Id_no}
            name="Id_no"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>email</FormLabel>
          <Input
            placeholder="Enter your email"
            onChange={change}
            value={user.email}
            name="email"
          ></Input>
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="enter your password"
              onChange={change}
              value={user.password}
              name="password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="5m" bg="white" onClick={handleClick}>
                {show ? "hide" : "show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        {/* <FormControl id="pic">
              <FormLabel>Upload your picture</FormLabel>
              <Input type='file' p={1.5} accept='image/*' onChange={(e)=>postDetails(e.target.files[0])}/> */}
        {/* </FormControl> */}
        <Button
          colorScheme="green"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
          isLoading={loading}
        >
          Login
        </Button>
      </VStack>
    </>
  );
};

export default Studentlogin;
