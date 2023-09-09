import React, { useEffect, useState } from "react";
import { Box, Image, Text, Container } from "@chakra-ui/react";
import "/css/takeattendence.css";
import { useNavigate } from "react-router-dom";

const Takeattendence = (props) => {
  const [students, setstudents] = useState([]);
  const [data, setdata] = useState([]);
  let date = new Date();
  let day = date.getDay() + "" + date.getMonth() + "" + date.getFullYear();
  // console.log(props);
  const showdata = async () => {
    const res = await fetch(
      `/getstudents?class=${props.class}&year=${props.year}&div=${props.div}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    // console.log(data);
    setstudents(data.data);
  };

  useEffect(() => {
    showdata();
  }, []);

  const Attendence = ({ name, roll_no, Attendence }) => {
    setdata([...data, { name, rollno: roll_no, attendenceStatus: Attendence }]);
    if (Attendence.value == "Absent")
      (document.getElementsByClassName("btn").style.boxShadow =
        "0px 0px 15px black"),
        (filter = blur("2px"));
  };
  // var day = new Date();
  const submitHandler = async () => {
    const res = await fetch(`/postAttendence?day=${props.day}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clas: students[0].clas,
        Div: students[0].div,
        // Year: students[0].year,
        // Time: props.time,
        // Teacher: props.teacher,
        // Subject: props.subject,
        // StudentData: data,
        // id: props.id,
        // year: props.year,
        // div: props.div,
        // updatedDay: day,
      }),
    });
    const data1 = await res.json();
    console.log(data1);
    // if (!data2) {
    //   alert("An Error Occurred...");
    // } else {
    //   alert("Attendence taken successfully");
    //   window.location.reload(false);
    // }
  };

  return (
    <div>
      <ul className="classUl">
        <li style={{ padding: "10px 60px" }}>Lecture Time : {props.time}</li>
        <li style={{ padding: "10px 60px" }}>Teacher : {props.teacher}</li>
        <li style={{ padding: "10px 60px" }}>Subject : {props.subject}</li>
      </ul>

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
                maxWidth="max-content"
                minW={"200px"}
                m="40px 0px 15px 0px"
                borderRadius="10px"
                borderWidth="1px"
              >
                <Text
                  fontSize="24px"
                  color={"whiteAlpha.900"}
                  textAlign="center"
                  mb={"10px"}
                >
                  <b>{val.Roll_no}</b>
                </Text>
                <Image
                  borderRadius="full"
                  width="100%"
                  margin={"auto"}
                  boxSize="130px"
                  // ml={"1.1rem"}
                  src="../images/profile_pic.png"
                  alt="Dan Abramov"
                />

                <Text
                  fontSize="18px"
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
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "red",
                      fontWeight: "500",
                      fontSize: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    value="A"
                    onClick={() => {
                      Attendence({
                        name: val.name,
                        roll_no: val.Roll_no,
                        Attendence: "Absent",
                      });
                    }}
                    className="btn"
                  >
                    A
                  </div>
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "green",
                      fontWeight: "500",
                      fontSize: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    value="P"
                    onClick={() => {
                      Attendence({
                        name: val.name,
                        roll_no: val.Roll_no,
                        Attendence: "Present",
                      });
                    }}
                  >
                    P
                  </div>
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50px",
                      background: "yellow",
                      fontWeight: "500",
                      fontSize: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    value="L"
                    onClick={() => {
                      Attendence({
                        name: val.name,
                        roll_no: val.Roll_no,
                        Attendence: "Late",
                      });
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
      {data.length == students.length ? (
        <div style={{ display: "flex" }}>
          <button
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
          >
            Submit
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Takeattendence;
