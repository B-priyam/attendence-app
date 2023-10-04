import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { EditIcon } from "@chakra-ui/icons";
import "../css/profilepage.css";

const UpdateTT = () => {
  const [user, setuser] = useState({
    clas: "",
    div: "",
    year: "",
  });
  const Toast = useToast();
  const [status, setstatus] = useState(false);
  const [field, setfield] = useState("");
  const [fieldData, setfieldData] = useState("");
  const [currentdata, setcurrentdata] = useState();
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState();
  const [Timetable, setTimetable] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const change = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };
  const days = [
    "monday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  var date = new Date();
  let today =
    date.getDate() + "" + (date.getMonth() + 1) + "" + date.getFullYear();
  let currentDay = days[date.getDay()].toUpperCase();

  const submitHandler = async () => {
    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/getTT?day=${currentDay.toLowerCase()}&Class=${
        user.clas
      }&year=${user.year}&div=${user.div}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setdata(data);
    setTimetable(data.Timetable);
  };

  const updateTimetable = async (value) => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/updateTT",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: data,
          currentdata,
          field,
          fieldData,
          date: today,
        }),
      }
    );
    const data2 = await res.json();
    if (res.status === 200) {
      setloading(true);
      Toast({
        title: "Successfull",
        description: data2.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setloading(false);
    onClose();
  };
  useEffect(() => {
    if (status === true) {
      submitHandler();
    }
  });
  return (
    <>
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
      <div
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: "space-around",
        }}
      >
        <Button
          position={"absolute"}
          top={170}
          colorScheme="green"
          width="max-content"
          marginTop="20px"
          onClick={() => {
            submitHandler, setstatus(true);
          }}
          isLoading={loading}
        >
          Get Timetable
        </Button>
      </div>
      {data !== undefined ? (
        <Box
          marginLeft={{ base: "0px", lg: "-50px" }}
          style={{
            position: "absolute",
            top: 270,
            width: "95vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            pt={"10px"}
            width={"95%"}
            minH={"10vh"}
            height={"max-content"}
            bgColor={"white"}
            borderRadius={"10px"}
            boxShadow={"1px 1px 10px grey"}
            marginBottom={"10px"}
          >
            <Box>
              <Table>
                <Thead>
                  <Tr>
                    <Th
                      fontSize={{ base: "12px", md: "20", lg: "30" }}
                      padding={{
                        base: "4px",
                        md: "0px 2vh",
                        lg: "0px 2vh",
                      }}
                      textAlign={"center"}
                    >
                      TIME
                    </Th>
                    <Th
                      fontSize={{ base: "12px", md: "20", lg: "30" }}
                      padding={{ base: "4px", md: "0px 2vh", lg: "0px 2vh" }}
                      textAlign={"center"}
                    >
                      TEACHER
                    </Th>
                    <Th
                      fontSize={{ base: "12px", md: "20", lg: "30" }}
                      padding={{ base: "4px", md: "0px 2vh", lg: "0px 2vh" }}
                      textAlign={"center"}
                    >
                      SUBJECT
                    </Th>
                    <Th
                      fontSize={{ base: "12px", md: "20", lg: "30" }}
                      padding={{ base: "4px", md: "0px 2vh", lg: "0px 2vh" }}
                      textAlign={"center"}
                    >
                      ROOM
                    </Th>
                    <Th
                      fontSize={{ base: "12px", md: "20", lg: "30" }}
                      padding={{ base: "4px", md: "0px 2vh", lg: "0px 2vh" }}
                      textAlign={"center"}
                    >
                      Day :{" "}
                      {window.innerWidth < 500
                        ? currentDay.slice(0, 3)
                        : currentDay}
                    </Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {Timetable.map((val, index) => {
                    return (
                      <Tr key={index}>
                        <Td
                          fontSize={{ base: "12px", md: "20", lg: "30" }}
                          padding={{
                            base: "2px 4px",
                            md: "0px 2vh",
                            lg: "0px 2vh",
                          }}
                          textAlign={"center"}
                        >
                          <EditIcon
                            boxSize={{ base: 6, lg: 8 }}
                            className="editProfile"
                            style={{ marginBottom: "-5px" }}
                            onClick={() => {
                              onOpen();
                              setcurrentdata(val);
                            }}
                          />
                          {val.time}
                        </Td>
                        <Td
                          fontSize={{ base: "12px", md: "20", lg: "30" }}
                          padding={{
                            base: "10px 0px",
                            md: "0px 2vh",
                            lg: "0px 2vh",
                          }}
                          textAlign={"center"}
                        >
                          {val.teacher}
                        </Td>
                        <Td
                          fontSize={{ base: "12px", md: "20", lg: "30" }}
                          padding={{
                            base: "10px 0px",
                            md: "0px 2vh",
                            lg: "0px 2vh",
                          }}
                          textAlign={"center"}
                        >
                          {val.subject}
                        </Td>
                        <Td
                          fontSize={{ base: "12px", md: "20", lg: "30" }}
                          padding={{
                            base: "10px 0px",
                            md: "0px 2vh",
                            lg: "0px 2vh",
                          }}
                          textAlign={"center"}
                          display={{ base: "none", lg: "none" }}
                          mt={"20px"}
                        >
                          {val.teacher === "Break"
                            ? "Break"
                            : val.teacher === "--"
                            ? "--"
                            : data.year + data.Class}
                        </Td>
                        <Td
                          fontSize={{ base: "12px", md: "20", lg: "30" }}
                          padding={{
                            base: "10px 0px",
                            md: "0px 2vh",
                            lg: "0px 2vh",
                          }}
                          textAlign={"center"}
                          display={{ base: "none", lg: "none" }}
                        >
                          {val.teacher === "Break"
                            ? "Break"
                            : val.teacher === "--"
                            ? "--"
                            : data.div}
                        </Td>
                        <Td
                          fontSize={{ base: "12px", md: "20", lg: "30" }}
                          padding={{
                            base: "10px 0px",
                            md: "0px 2vh",
                            lg: "0px 2vh",
                          }}
                          textAlign={"center"}
                        >
                          {val.room}
                        </Td>

                        <Td textAlign={"center"}>
                          {val.teacher != "--" &&
                          val.teacher != "Break" &&
                          val.status === "taken" ? (
                            <Button
                              disabled
                              color="white"
                              background="red"
                              borderRadius="10px"
                              padding="10px"
                              fontSize={{ base: "15px", lg: "20px" }}
                            >
                              {window.innerWidth > 500
                                ? "Attendence taken"
                                : "AT"}
                            </Button>
                          ) : (
                            ""
                          )}

                          {val.teacher != "--" &&
                            val.teacher != "Break" &&
                            val.status != "taken" && (
                              <Button
                                color="white"
                                background="green"
                                borderRadius="10px"
                                padding="10px"
                                fontSize={{ base: "15px", lg: "20px" }}
                              >
                                {window.innerWidth > 500
                                  ? "Take attendence"
                                  : "TA"}
                              </Button>
                            )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Choose Field</FormLabel>
              <Select
                placeholder="Select Field"
                name="field"
                onChange={(e) => setfield(e.target.value)}
              >
                <option value="teacher">Teacher</option>
                <option value="subject">Subject</option>
                <option value="room">Room</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Enter Value</FormLabel>
              <Input
                placeholder="enter value to be updated"
                name="fielData"
                value={fieldData}
                onChange={(e) => setfieldData(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="green"
              onClick={updateTimetable}
              isLoading={loading}
            >
              Update
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateTT;
