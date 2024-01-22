import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Box,
  Table,
  Thead,
  Tr,
  Td,
  Tbody,
  Container,
  TableContainer,
  Alert,
  AlertIcon,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Attendence from "./Attendence";
import { set } from "mongoose";

const TeacherAttendence = () => {
  const [subjects, setsubjects] = useState([]);
  const [names, setnames] = useState([]);
  const [attendence, setattendence] = useState([]);
  const [allover, setallover] = useState([]);
  const [page, setpage] = useState(false);
  const [name, setname] = useState("");
  const [visibility, setvisibility] = useState("hidden");
  const Toast = useToast();
  const [user, setuser] = useState({
    clas: "",
    div: "",
    year: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  let date = new Date();
  let tdate = date.getDate();
  let month = date.getMonth() + 1;

  const submithandler = async (startDate, endDate) => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/attendence/teacher",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, st: startDate, lt: endDate }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      Toast({
        title: "error occurred",
        description: data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      console.log(data);
      setsubjects(data.subjects);
      setnames(data.names);
      setattendence(data.attendence);
      setallover(data.alloverdata);
      setvisibility("");
    }
  };

  return page ? (
    <Attendence name={name} page={page} setpage={setpage} />
  ) : (
    <div>
      <div
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: "space-around",
        }}
      >
        <FormControl isRequired>
          <FormLabel>Class</FormLabel>
          <Select placeholder="Select Class" onChange={change} name="clas">
            <option value={"class-1"}>Guest class</option>
            <option value={"bscit"}>Bsc.IT</option>
            <option value={"b.com"}>B.com</option>
            <option value={"bcaf"}>BAF</option>
            <option value={"bbi"}>BBI</option>
            <option value={"bms"}>BMS</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>year</FormLabel>
          <Select placeholder="Select Year" onChange={change} name="year">
            <option value="fy">Guest year</option>
            <option value="fy">FY</option>
            <option value="sy">SY</option>
            <option value="ty">TY</option>
          </Select>
        </FormControl>
        <FormControl id="div" isRequired>
          <FormLabel>Div</FormLabel>
          <Input
            placeholder="A"
            onChange={change}
            name="div"
            value={user.div.toUpperCase()}
          ></Input>
        </FormControl>
      </div>
      <Box
        width={{ base: "95vw", lg: "80vw" }}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button
          onClick={() => {
            submithandler(
              `${month < 10 ? "0" + month : month}-01-${date.getFullYear()}`,
              `${month < 10 ? "0" + month : month}-${
                tdate < 10 ? "0" + tdate : tdate
              }-${date.getFullYear()}`
            );
          }}
          // scrollSnapAlign={"center"}
          colorScheme="orange"
          // width={"50%"}
          m={"1vh 0"}
          // textAlign={"center"}
        >
          Get Attendence List
        </Button>
      </Box>
      <Box visibility={visibility}>
        <Container
          position={{ base: "static", md: "fixed", lg: "absolute" }}
          left={"0"}
          overflow={{ base: "scroll", md: "hidden", lg: "visible" }}
          width={"100vw"}
        >
          {attendence ? (
            <>
              <Box
                m={"4vh 0"}
                width={"90vw"}
                display={"flex"}
                justifyContent={"center"}
              >
                <Button
                  colorScheme="orange"
                  onClick={() => {
                    submithandler(
                      `${
                        month < 10 ? "0" + (month - 1) : month - 1
                      }-01-${date.getFullYear()}`,
                      `${month < 10 ? "0" + (month - 1) : month - 1}-${
                        tdate < 10 ? "0" + tdate : tdate
                      }-${date.getFullYear()}`
                    );
                  }}
                >
                  Get Previous Month Attendence
                </Button>
              </Box>
              <Box
                width={{ base: "90vw", md: "100vw", lg: "100vw" }}
                display={"flex"}
                justifyContent={"center"}
              >
                <Text
                  background={"orange.200"}
                  textAlign={"center"}
                  width={"90vw"}
                  textShadow={"1px 0px 1px black"}
                >
                  Click On Any Student Name To Get Detailed Attendence
                </Text>
              </Box>
            </>
          ) : (
            ""
          )}
          <Table width={"100vw"}>
            <Thead>
              <Tr>
                <Td textAlign={"center"}>Name</Td>
                {subjects.map((val, index) => {
                  return (
                    <Td key={index} textAlign={"center"}>
                      {val}
                    </Td>
                  );
                })}
                <Td textAlign={"center"}>allover</Td>
              </Tr>
            </Thead>
            <Tbody>
              <Td>
                {names.map((val, index) => {
                  return (
                    <Tr
                      key={index}
                      onClick={() => {
                        setpage(true), setname(val);
                      }}
                      cursor={"pointer"}
                      width={"20vw"}
                    >
                      <Td whiteSpace={"nowrap"} textAlign={"center"}>
                        {val}
                      </Td>
                    </Tr>
                  );
                })}
              </Td>
              {attendence.map((val) => {
                return (
                  <Td>
                    {val.map((val, index) => {
                      return (
                        <Tr key={index}>
                          <Td>{val.total ? val.total : 0}%</Td>
                        </Tr>
                      );
                    })}
                  </Td>
                );
              })}
              <Td>
                {allover.map((val) => {
                  return (
                    <Tr>
                      <Td>{Math.round(val[1] / subjects.length)}%</Td>
                    </Tr>
                  );
                })}
              </Td>
            </Tbody>
          </Table>
        </Container>
      </Box>
    </div>
  );
};

export default TeacherAttendence;
