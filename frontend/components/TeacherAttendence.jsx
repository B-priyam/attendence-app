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
  let st = `${month < 10 ? "0" + month : month}-01-${date.getFullYear()}`;
  let lt = `${month < 10 ? "0" + month : month}-${
    tdate < 10 ? "0" + tdate : tdate
  }-${date.getFullYear()}`;

  const submithandler = async () => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/attendence/teacher",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, st: st, lt: lt }),
      }
    );
    const data = await res.json();
    console.log(data);
    setsubjects(data.subjects);
    setnames(data.names);
    setattendence(data.attendence);
    setallover(data.alloverdata);
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
            <option value={"bscit"}>Bsc.IT</option>
            <option value={"B.com"}>B.com</option>
            <option value={"BAF"}>BAF</option>
            <option value={"BBI"}>BBI</option>
            <option value={"BMS"}>BMS</option>
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>year</FormLabel>
          <Select placeholder="Select Year" onChange={change} name="year">
            <option value="fy">FY</option>
            <option value="sy">SY</option>
            <option value="ty">TY</option>
          </Select>
        </FormControl>
        <FormControl id="div" isRequired>
          <FormLabel>Div</FormLabel>
          <Input
            placeholder="Enter division"
            onChange={change}
            name="div"
            value={user.div.toUpperCase()}
          ></Input>
        </FormControl>
      </div>
      <Box width={"90vw"} display={"flex"} justifyContent={"center"}>
        <Button
          onClick={submithandler}
          scrollSnapAlign={"center"}
          colorScheme="orange"
          width={"50%"}
          textAlign={"center"}
        >
          Get Attendence List
        </Button>
      </Box>
      <Box>
        <Table>
          <Thead>
            <Tr>
              {/* <Td>Date</Td> */}
              <Td>Name</Td>
              {subjects.map((val, index) => {
                return <Td key={index}>{val}</Td>;
              })}
              <Td>allover</Td>
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
                  >
                    {val}
                  </Tr>
                );
              })}
            </Td>
            {attendence.map((val) => {
              return (
                <Td>
                  {val.map((val, index) => {
                    return <Tr key={index}>{val.total ? val.total : 0}%</Tr>;
                  })}
                </Td>
              );
            })}
            <Td>
              {allover.map((val) => {
                return <Tr>{val[1]}%</Tr>;
              })}
            </Td>
          </Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default TeacherAttendence;
