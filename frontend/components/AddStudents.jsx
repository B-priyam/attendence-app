import React, { useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Select,
  NumberInput,
  NumberInputField,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";
import { color } from "framer-motion";

const AddStudents = () => {
  const [loading, setloading] = useState(false);
  const [pic, setpic] = useState("");
  const [cld, setcld] = useState("");
  const [user, setuser] = useState({
    name: "",
    Roll_no: "",
    Id_no: "",
    clas: "",
    div: "",
    year: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [emailValid, setemailValid] = useState(false);
  const [passValid, setpassValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const change = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  const Toast = useToast();
  const [show, setshow] = useState(false);
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
          setcld(data.public_id.toString());
          // console.log(data);
          setloading(false);
        })
        .catch((e) => {
          Toast({
            title: "error",
            description: e.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
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

    setIdValid(false);
    setemailValid(false);
    setpassValid(false);
    if (!/^([0-9]{6,})$/.test(user.Id_no)) {
      setIdValid(true);
      setErrorMessage("Id_no cannot be less than 6 digits");
      return document.querySelector("#id").focus();
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)) {
      setemailValid(true);
      setErrorMessage("Please provide a valid email Id");
      return document.querySelector("#email").focus();
    }
    if (!/^([a-z0-9A-Z]{8,})$/.test(user.password)) {
      setpassValid(true);
      setErrorMessage("Password cannot be less than 8 characters");
      return document.querySelector("#password").focus();
    }
    const capitalize = (str) => {
      const lower = str.toLowerCase();
      return `${lower[0].toUpperCase()}${lower.slice(1)}`;
    };

    setloading(true);
    const {
      name,
      Roll_no,
      Id_no,
      clas,
      div,
      year,
      email,
      password,
      confirmpassword,
    } = user;
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/students",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: capitalize(name),
          Roll_no,
          Id_no,
          clas,
          div,
          year,
          email,
          password,
          profilePic: pic,
          confirmpassword,
          cloudinary: cld,
        }),
      }
    );
    const data = await res.json();
    if (!data || res.status === 400) {
      Toast({
        title: "Error occured",
        description: data.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    } else {
      Toast({
        title: "registration successfull",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    }
  };
  return (
    <VStack spacing="5px" color="black">
      <FormControl id="id" isRequired isInvalid={idValid}>
        <FormLabel>Id no</FormLabel>
        <NumberInput>
          <NumberInputField
            placeholder="Enter your UID number"
            onChange={change}
            name="Id_no"
            value={user.Id_no}
            // id="id"
          />
        </NumberInput>
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      </FormControl>
      <FormControl id="Roll_No" isRequired>
        <FormLabel>Roll no</FormLabel>
        <Input
          placeholder="Enter your Roll number"
          onChange={change}
          name="Roll_no"
          value={user.Roll_no}
          type="number"
        ></Input>
      </FormControl>
      <FormControl id="name" isRequired>
        <FormLabel>name</FormLabel>
        <Input
          placeholder="Enter your name"
          onChange={change}
          name="name"
          value={user.name}
        ></Input>
      </FormControl>
      <FormControl id="class" isRequired>
        <FormLabel>class</FormLabel>
        <Select placeholder="Select Class" onChange={change} name="clas">
          <option value={"bscit"}>Bsc.IT</option>
          <option value={"B.com"}>B.com</option>
          <option value={"BAF"}>BAF</option>
          <option value={"BBI"}>BBI</option>
          <option value={"BMS"}>BMS</option>
        </Select>
      </FormControl>
      <FormControl id="div" isRequired>
        <FormLabel>Div</FormLabel>
        <Input
          placeholder="Enter your division"
          onChange={change}
          name="div"
          value={user.div.toUpperCase()}
        ></Input>
      </FormControl>
      <FormControl id="name" isRequired>
        <FormLabel>Year</FormLabel>
        <Select name="year" onChange={change} placeholder="Choose your Year">
          <option value="fy">FY</option>
          <option value="sy">SY</option>
          <option value="ty">TY</option>
        </Select>
      </FormControl>
      <FormControl id="email" isRequired isInvalid={emailValid}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={change}
          value={user.email}
          name="email"
        ></Input>
        <FormErrorMessage color="orange">{errorMessage}</FormErrorMessage>
      </FormControl>
      <FormControl id="password" isRequired isInvalid={passValid}>
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
        <FormErrorMessage color="orange">{errorMessage}</FormErrorMessage>
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
      <FormControl id="pic">
        <FormLabel>Upload your Profile Pic</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          name="profilePic"
        />
      </FormControl>
      <Button
        type="submit"
        colorScheme="green"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Add Student
      </Button>
    </VStack>
  );
};

export default AddStudents;
