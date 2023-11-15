import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  List,
  UnorderedList,
  ListItem,
  Button,
  useToast,
  Input,
  Radio,
  RadioGroup,
  Avatar,
} from "@chakra-ui/react";
import "/css/takeattendence.css";

const Takeattendence = (props) => {
  const [students, setstudents] = useState([]);
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const Toast = useToast();

  let uniquedata = data.filter(
    (val, index, self) =>
      self.findLastIndex((val2) => val2.rollno === val.rollno) === index
  );
  uniquedata = uniquedata.sort((a, b) => a.rollno - b.rollno);

  let date = new Date();
  let day =
    date.getDate() + "" + (date.getMonth() + 1) + "" + date.getFullYear();
  const showdata = async () => {
    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/getstudents?class=${props.class}&year=${props.year}&div=${props.div}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setstudents(data.data);
  };

  useEffect(() => {
    showdata();
  }, []);

  const Attendence = ({ name, roll_no, Attendence }) => {
    setdata([...data, { name, rollno: roll_no, attendenceStatus: Attendence }]);
  };
  const submitHandler = async () => {
    setloading(true);
    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/postAttendence?day=${props.day}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clas: students[0].Class,
          Div: students[0].div,
          Year: students[0].year,
          Time: props.time,
          Teacher: props.teacher,
          Subject: props.subject,
          StudentData: uniquedata,
          id: props.id,
          year: props.year,
          div: props.div,
          updatedDay: day,
        }),
      }
    );
    const data2 = await res.json();
    console.log(data2);
    if (!data2) {
      Toast({
        title: "error",
        description: "could not take attendence please try again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "success",
        description: "Attendence Taken Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      () => {
        new Promise((res) => setTimeout(res, 2000));
      };
      window.location.reload(false);
    }
    setloading(false);
  };

  return (
    <div>
      <List></List>
      <UnorderedList className="classUl">
        <ListItem
          listStyleType={"none"}
          padding={{ base: "10px 10px", md: "10px 40px", lg: "10px 60px" }}
          fontSize={{ base: "15px", md: "20px", lg: "24px" }}
          ml={{ base: "-20px" }}
        >
          <b>Lecture Time : {props.time}</b>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          padding={{ base: "10px 10px", md: "10px 40px", lg: "10px 60px" }}
          fontSize={{ base: "15px", md: "20px", lg: "24px" }}
        >
          <b>Teacher : {props.teacher}</b>
        </ListItem>
        <ListItem
          listStyleType={"none"}
          padding={{ base: "10px 10px", md: "10px 40px", lg: "10px 60px" }}
          fontSize={{ base: "15px", md: "20px", lg: "24px" }}
        >
          <b>Subject : {props.subject}</b>
        </ListItem>
      </UnorderedList>

      <div className={"data"}>
        {students.map((val, index) => {
          return (
            <div key={index}>
              <Box
                d="flex"
                alignItems="center"
                justifyContent="center"
                p={3}
                bg={"#0E2954"}
                maxWidth={{ base: "160px", lg: "210px" }}
                minW={{ lg: "200px" }}
                m="40px 0px 15px 0px"
                borderRadius="10px"
                borderWidth="1px"
              >
                <Text
                  fontSize={{ base: "12px", lg: "24px" }}
                  color={"whiteAlpha.900"}
                  textAlign="center"
                  mb={"10px"}
                >
                  <b>{val.Roll_no}</b>
                </Text>
                <Avatar
                  marginLeft={{ lg: "20px" }}
                  borderRadius="full"
                  width={{ base: "60%" }}
                  margin={"auto"}
                  boxSize="130px"
                  size={"100%"}
                  fontSize={"80"}
                  objectFit={"cover"}
                  src={val.profilePic}
                  name={val.name}
                />

                <Text
                  fontSize={{ base: "12px", lg: "18px" }}
                  textAlign="center"
                  color={"whiteAlpha.900"}
                  m={"10px"}
                >
                  <b>{val.name}</b>
                </Text>

                {
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <RadioGroup
                      display={"flex"}
                      justifyContent={"center"}
                      gap={"7px"}
                    >
                      <Radio
                        bg={"white"}
                        style={{
                          height: "40px",
                          width: "40px",
                          padding: "18px",
                        }}
                        value="A"
                        name="btn"
                        colorScheme="green"
                        onChange={() => {
                          Attendence({
                            name: val.name,
                            roll_no: val.Roll_no,
                            Attendence: "Present",
                          });
                        }}
                      >
                        <span style={{ marginLeft: "-34px" }}>P</span>
                      </Radio>
                      <Radio
                        bg={"white"}
                        style={{
                          height: "40px",
                          width: "40px",
                          padding: "18px",
                        }}
                        value="P"
                        colorScheme="red"
                        onChange={() => {
                          Attendence({
                            name: val.name,
                            roll_no: val.Roll_no,
                            Attendence: "Absent",
                          });
                        }}
                      >
                        <span style={{ marginLeft: "-34px" }}>A</span>
                      </Radio>
                      <Radio
                        bg={"white"}
                        style={{
                          height: "40px",
                          width: "40px",
                          padding: "18px",
                        }}
                        value="L"
                        colorScheme="yellow"
                        onChange={() => {
                          Attendence({
                            name: val.name,
                            roll_no: val.Roll_no,
                            Attendence: "Late",
                          });
                        }}
                      >
                        <span style={{ marginLeft: "-34px" }}>L</span>
                      </Radio>
                    </RadioGroup>
                  </div>
                }
              </Box>
            </div>
          );
        })}
      </div>
      {uniquedata.length == students.length ? (
        <div style={{ display: "flex" }}>
          <Button
            style={{
              background: "green",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              color: "white",
              margin: "0px auto",
              width: "50vw",
              fontSize: "20px",
            }}
            onClick={submitHandler}
            isLoading={loading}
          >
            Submit
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Takeattendence;
