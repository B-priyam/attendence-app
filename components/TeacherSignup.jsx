import React, { useState } from "react";
import { FormControl, FormLabel, Button } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
// import axios from 'axios';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const TeacherSignup = () => {
  const [show, setshow] = useState(false);
  const [pic, setpic] = useState();

  const [user, setuser] = useState({
    UID: "",
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setloading] = useState(false);
  const Toast = useToast();
  //   const history = useHistory()

  let name, value;
  const change = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleClick = () => setshow(!show);
  const postDetails = (pic) => {
    setloading(true);
    if (pic === undefined) {
      Toast({
        title: "please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (
      pic.type === "image/jpg" ||
      pic.type === "image/png" ||
      pic.type === "image/jpeg"
    ) {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "priyam3801h");
      fetch("https://api.cloudinary.com/v1_1/priyam3801h/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setpic(data.url.toString());
          setloading(false);
        })
        .catch((e) => {
          console.log("error", e.message);
          setloading(false);
        });
    } else {
      Toast({
        title: "please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
      return;
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // const {name,email,password,confirmpassword} = user;
    setloading(true);
    // if(!name||!email||!password||!confirmpassword){
    //   Toast({
    //     title:"please fill all fields",
    //     status:"warning",
    //     duration:5000,
    //     isClosable:true,
    //     position:'top'
    //   })
    //   setloading(false)
    //   return;
    // }
    // if(password!==confirmpassword){
    //   Toast({
    //     title:"passwords are not matching",
    //     status:"warning",
    //     duration:5000,
    //     isClosable:true,
    //     position:'top'
    //   })
    //   setloading(false)
    //   return;
    // }

    const { UID, name, email, password } = user;
    const res = await fetch("/teachers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UID: UID,
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (!data) {
      Toast({
        title: "Error occured",
        description: "not submitted",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    } else {
      console.log(data);
      Toast({
        title: "registration successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    }

    // localStorage.setItem("userInfo",JSON.stringify(data))

    // history.push("/chats")
  };

  return (
    <VStack spacing="5px" color="black">
      <FormControl id="UID" isRequired>
        <FormLabel>UID</FormLabel>
        <Input
          placeholder="Enter your UID number"
          onChange={change}
          name="UID"
          value={user.UID}
          type="number"
        ></Input>
      </FormControl>
      <FormControl id="firstname" isRequired>
        <FormLabel>name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={change}
          name="name"
          value={user.name}
        ></Input>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
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
            name="password"
            value={user.password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="5m" bg="white" onClick={handleClick}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="cpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="confirm your password"
            onChange={change}
            name="confirmpassword"
            value={user.confirmpassword}
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
              <Input type='file' p={1.5} accept='image/*' onChange={(e)=>postDetails(e.target.files[0])} name='profilePic'/>
            </FormControl> */}
      <Button
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default TeacherSignup;
