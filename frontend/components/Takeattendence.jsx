import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  Container,
  background,
  Td,
  Tr,
  List,
  UnorderedList,
  ListItem,
  Button,
} from "@chakra-ui/react";
import "/css/takeattendence.css";
import { useNavigate } from "react-router-dom";

const Takeattendence = (props) => {
  const [students, setstudents] = useState([]);
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  const uniquedata = data.filter(
    (val, index, self) =>
      self.findLastIndex((val2) => val2.rollno === val.rollno) === index
  );

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
    // console.log(data2);
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
      window.location.reload(false);
    }
    setloading(false);
  };
  const changeColor = (color, index) => {
    // console.log(event.target);
    document.getElementsByClassName("buttons")[index].style.background =
      "white";

    document.getElementsByClassName(`button-${color}`)[
      index
    ].style.background = `${color}`;
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
                alignItems={"center"}
                justifyContent="center"
                p={3}
                bg={"#0E2954"}
                maxWidth={{ base: "170px", lg: "max-content" }}
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
                <Image
                  borderRadius="full"
                  width={{ base: "60%" }}
                  margin={"auto"}
                  boxSize="130px"
                  // ml={"1.1rem"}
                  src={val.profilePic}
                  alt="Dan Abramov"
                />

                <Text
                  fontSize={{ base: "12px", lg: "18px" }}
                  textAlign="center"
                  color={"whiteAlpha.900"}
                  m={"10px"}
                >
                  <b>{val.name}</b>
                </Text>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    bottom: "0",
                  }}
                >
                  <div
                    className="buttons button-red"
                    value="A"
                    id="red"
                    onClick={() => {
                      Attendence({
                        name: val.name,
                        roll_no: val.Roll_no,
                        Attendence: "Absent",
                      });
                      changeColor("red", index);
                    }}
                  >
                    A
                  </div>
                  <div
                    className="button-green buttons"
                    value="P"
                    id="green"
                    onClick={() => {
                      Attendence({
                        name: val.name,
                        roll_no: val.Roll_no,
                        Attendence: "Present",
                      });
                      changeColor("green", index);
                    }}
                  >
                    P
                  </div>
                  <div
                    className="button-yellow buttons"
                    value="L"
                    id="yellow"
                    onClick={() => {
                      Attendence({
                        name: val.name,
                        roll_no: val.Roll_no,
                        Attendence: "Late",
                      });
                      changeColor("yellow", index);
                    }}
                  >
                    L
                  </div>
                </div>
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
