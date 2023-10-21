import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Container,
  Divider,
  Flex,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Attendence = () => {
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [allover, setallover] = useState(0);
  const [sub, setsub] = useState([]);
  const [att, setatt] = useState([]);
  const [particuler, setparticular] = useState([]);
  const location = useLocation();
  //   console.log(date);

  let date = new Date();
  let month = date.getMonth() + 1;
  let st = `01-${month < 10 ? "0" + month : month}-${date.getFullYear()}`;
  let lt = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}-${
    month < 10 ? "0" + month : month
  }-${date.getFullYear()}`;

  const SubmitHandler = async (start, end) => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/attendence",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          start,
          end,
          name: location.state.data.name,
        }),
      }
    );
    const data = await res.json();
    if (!data) {
      console.log("🥲");
    } else {
      console.log(data);
      if (data.message > 0) {
        setallover(data.message);
      } else {
        setallover(0);
      }
      setsub(Object.keys(data.p));
      setatt(Object.values(data.p));
    }
  };

  useEffect(() => {
    SubmitHandler(st, lt);
  }, []);

  return (
    <>
      <Box width={"100%"} height={"max-content"}>
        <Text textAlign={"center"} fontSize={"48px"}>
          THIS MONTH ATTENDENCE
        </Text>
        <Box
          display={"flex"}
          marginTop={"1vw"}
          justifyContent={"center"}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Box
            width={{ base: "100%", lg: "40%" }}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            mb={{ base: "5vh" }}
          >
            <Text textAlign={"center"} fontSize={"150%"}>
              Overall
            </Text>
            <CircularProgress
              value={allover}
              color={"green"}
              size={{ base: "70vw", lg: "30vw" }}
            >
              <CircularProgressLabel>{`${allover}%`}</CircularProgressLabel>
            </CircularProgress>
          </Box>
          <Box
            display={"flex"}
            width={{ base: "100%", lg: "60%" }}
            flexDirection={"column"}
          >
            <Divider display={{ base: "inline", md: "none", lg: "none" }} />
            <Divider />
            <Text textAlign={"center"} fontSize={"150%"} mt={{ base: "5vh" }}>
              Attendence According To Subject
            </Text>
            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap={"wrap"}
              width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={"80%"}
            >
              {att.map((val, index) => {
                return (
                  <CircularProgress
                    value={val}
                    color={"green"}
                    size={"90%"}
                    width={"30%"}
                  >
                    <CircularProgressLabel
                      fontSize={{ base: "200%", lg: "400%" }}
                      mt={"-10px"}
                    >
                      {val ? `${val}%` : `0%`}
                    </CircularProgressLabel>
                    <Text textAlign={"center"} fontSize={"20px"}>
                      {sub[index]}
                    </Text>
                  </CircularProgress>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>

      <Text display={{ base: "inline", lg: "none" }}>From</Text>
      <Text display={{ base: "inline", lg: "none" }}>To</Text>
      <Box display={"flex"} width={"100%"}>
        <Input
          type="date"
          min="2023-09-02"
          onChange={(e) => setstartdate(e.target.value)}
          placeholder="From"
        />
        <Input
          type="date"
          onChange={(e) => setenddate(e.target.value)}
          placeholder="TO"
        />
      </Box>
      <Box width={"100%"} justifyContent={"center"} display={"flex"}>
        <Button
          onClick={() => SubmitHandler(startdate, enddate)}
          display={"block"}
          width={"30%"}
          bg={"orange.400"}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Attendence;
