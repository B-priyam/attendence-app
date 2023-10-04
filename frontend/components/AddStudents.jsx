import React, { useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Select,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { useToast } from "@chakra-ui/react";

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

  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return `${lower[0].toUpperCase()}${lower.slice(1)}`;
  };

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
      <FormControl id="ID_no" isRequired>
        <FormLabel>Id no</FormLabel>
        <NumberInput
          // type="number"
          min={100000}
          max={999999}
        >
          <NumberInputField
            placeholder="Enter your UID number"
            onChange={change}
            name="Id_no"
            value={user.Id_no}
          />
        </NumberInput>
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
