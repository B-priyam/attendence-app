import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import Noticepage from "./Noticepage";
import Takeattendence from "./Takeattendence";

const Attendencepage = (props) => {
  const [users, setusers] = useState([]);

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
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  let currentDay = days[date.getDay()].toUpperCase();

  const showdata = async () => {
    if (props.data.type === "student") {
      const res = await fetch(
        `https://attendence-app-nbtf.onrender.com/getTT?day=${currentDay.toLowerCase()}&Class=${
          props.data.Class
        }&year=${props.data.year}&div=${props.data.div}`,
        {
          method: "GET",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setusers(data.Timetable);
    } else {
      const res = await fetch(
        `https://attendence-app-nbtf.onrender.com/getTT/teacher?day=${currentDay.toLowerCase()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "appliction/json",
          },
        }
      );
      const data = await res.json();
      const val = data.flatMap((item) => {
        return item.Timetable.filter((val) => {
          if (val.teacher === props.data.name.split(" ")[0]) {
            val.class = item.Class;
            val.div = item.div;
            val.year = item.year;
            return val;
          }
        });
      });
      setusers(val);
    }
  };
  showdata();

  const [page, setpage] = useState(false);
  const [data, setdata] = useState({
    time: "",
    teachername: "",
    subject: "",
    classroom: "",
    date: "",
    attendence: "",
    class: "",
    year: "",
    div: "",
    id: "",
    day: "",
  });

  // console.log(currentDay.slice(0, 3));
  const Attendencepage = () => {
    return (
      <>
        <Takeattendence
          time={data.time}
          teacher={data.teachername}
          subject={data.subject}
          date={data.date}
          id={data.id}
          class={data.class}
          div={data.div}
          year={data.year}
          day={currentDay.toLowerCase()}
        />
      </>
    );
  };

  return (
    <>
      {page ? (
        Attendencepage()
      ) : (
        <div>
          <Table cellSpacing={"5px"} width={"90vw"} textAlign={"center"}>
            <Thead>
              <Tr alignItems={"center"} maxWidth={{ base: "250px" }}>
                <Th
                  fontSize={{ base: "13px", lg: "25px" }}
                  padding={"3px"}
                  textAlign={"center"}
                >
                  TIME
                </Th>
                <Th
                  fontSize={{ base: "13px", lg: "25px" }}
                  textAlign={"center"}
                  padding={"3px"}
                >
                  TEACHER
                </Th>
                <Th
                  fontSize={{ base: "13px", lg: "25px" }}
                  padding={"3px"}
                  textAlign={"center"}
                >
                  SUBJECT
                </Th>
                {props.data.type === "teacher" ? (
                  <>
                    <Th
                      fontSize={{ base: "13px", lg: "25px" }}
                      maxWidth={"100px"}
                      textAlign={"center"}
                      padding={"3px"}
                    >
                      CLASS
                    </Th>
                    <Th
                      fontSize={{ base: "10px", lg: "25px" }}
                      textAlign={"center"}
                      padding={0}
                      maxWidth={"70px"}
                    >
                      DIV
                    </Th>
                  </>
                ) : (
                  ""
                )}
                <Th
                  fontSize={{ base: "12px", lg: "25px" }}
                  textAlign={"center"}
                  padding={"5vh 0"}
                  maxWidth={"70px"}
                >
                  ROOM
                </Th>
                <Th
                  fontSize={{ base: "10px", md: "20", lg: "25px" }}
                  padding={"5px"}
                  axWidth={"10px"}
                >
                  Day :
                  {window.innerWidth < 500
                    ? currentDay.slice(0, 3)
                    : currentDay}
                </Th>
              </Tr>
            </Thead>

            <Tbody>
              {users.map((val, index) => {
                return (
                  <Tr key={index} maxWidth={{ base: "450px" }}>
                    <Td
                      padding={{ base: "10px 0px", lg: "10px 2vw" }}
                      fontSize={{ base: "13px", lg: "25px" }}
                      letterSpacing={{ lg: "3px" }}
                      textAlign={"center"}
                    >
                      {val.time}
                    </Td>
                    <Td
                      padding={{ base: "10px 0px", lg: "10px 2vw" }}
                      fontSize={{ base: "13px", lg: "25px" }}
                      textAlign={"center"}
                    >
                      {val.teacher}
                    </Td>
                    <Td
                      padding={{ base: "10px 0px", lg: "10px 2vw" }}
                      fontSize={{ base: "13px", lg: "25px" }}
                      textAlign={"center"}
                    >
                      {val.subject}
                    </Td>
                    {props.data.type === "teacher" ? (
                      <>
                        <Td
                          padding={{ base: "10px 0px", lg: "10px 2vw" }}
                          fontSize={{ base: "13px", lg: "25px" }}
                          textAlign={"center"}
                        >
                          {val.year + val.class}
                        </Td>
                        <Td
                          padding={{ base: "10px 0px", lg: "10px 2vw" }}
                          fontSize={{ base: "13px", lg: "25px" }}
                          textAlign={"center"}
                        >
                          {val.div}
                        </Td>
                      </>
                    ) : (
                      ""
                    )}
                    <Td
                      padding={{ base: "0px -24px", lg: "10px 2vw" }}
                      fontSize={{ base: "13px", lg: "25px" }}
                      textAlign={"center"}
                    >
                      {val.room}
                    </Td>

                    <Td>
                      {val.teacher != "--" &&
                      val.teacher != "Break" &&
                      val.status === "taken" ? (
                        <Button
                          marginLeft={{ base: "-25px", lg: "0", md: "0" }}
                          display={"flex"}
                          flexWrap={"wrap"}
                          disabled
                          color="white"
                          background="red"
                          borderRadius="10px"
                          padding={{ base: "2px 0px", lg: "10px" }}
                          fontSize={{ base: "12px", lg: "20px" }}
                          width={{
                            base: "5vw",
                            lg: "max-content",
                            md: "max-content",
                          }}
                        >
                          {window.innerWidth > 500 ? "Take attendence" : "AT"}
                        </Button>
                      ) : (
                        ""
                      )}

                      {val.teacher != "--" &&
                      val.teacher != "Break" &&
                      val.status != "taken" &&
                      props.data.type == "teacher" ? (
                        <Button
                          marginLeft={{ base: "-25px", lg: "0", md: "0" }}
                          maxW={{
                            base: "10px",
                            lg: "max-content",
                            md: "max-content",
                          }}
                          color="white"
                          background="green"
                          borderRadius="10px"
                          padding={{ base: "2px", lg: "10px" }}
                          fontSize={{ base: "12px", lg: "20px" }}
                          onClick={() => {
                            setpage(true);
                            setdata({
                              time: val.time,
                              teachername: val.teacher,
                              subject: val.subject,
                              date: today,
                              class: val.class,
                              div: val.div,
                              year: val.year,
                              id: val._id,
                            });
                          }}
                        >
                          {window.innerWidth > 500 ? "Take attendence" : "TA"}
                        </Button>
                      ) : (
                        ""
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default Attendencepage;
