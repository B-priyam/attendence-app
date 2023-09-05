import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import Noticepage from "./Noticepage";
import Takeattendence from "./Takeattendence";

const Attendencepage = (props) => {
  var arr = [];
  var [users, setusers] = useState([]);
  const days = [
    "wednesday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  var date = new Date();
  let today = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  let currentDay = days[date.getDay()].toUpperCase();

  const showdata = async () => {
    if (props.data.type === "student") {
      const res = await fetch(
        `/getTT?day=${currentDay.toLowerCase()}&Class=${props.data.clas}&year=${
          props.data.year
        }`,
        {
          method: "GET",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      //   console.log(data.data.Timetable[0].time)
      setusers(data.Timetable);
    } else {
      const res = await fetch(
        `/getTT/teacher?day=${currentDay.toLowerCase()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "appliction/json",
          },
        }
      );
      const data = await res.json();
      data.map((val) => {
        val.Timetable.map((val) => {
          if (val.teacher === props.data.name) {
            // console.log(val);
            // setusers([...users, val]);
            users.push(val);
          }
        });
      });
    }
  };

  useEffect(() => {
    showdata();
  }, []);
  // console.log(arr);
  const [page, setpage] = useState(false);
  const [data, setdata] = useState({
    time: "",
    teachername: "",
    subject: "",
    classroom: "",
    date: "",
    attendence: "",
  });
  const Attendencepage = () => {
    return (
      <>
        <Takeattendence
          time={data.time}
          teacher={data.teachername}
          subject={data.subject}
          date={data.date}
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
          <table
            border={"1px solid black"}
            cellPadding={"8px"}
            cellSpacing={"10px"}
          >
            <thead>
              <tr>
                <th style={{ fontSize: "30px", padding: "0px 8vw" }}>TIME</th>
                <th style={{ fontSize: "30px" }}>TEACHER</th>
                <th style={{ fontSize: "30px" }}>SUBJECT</th>
                <th style={{ fontSize: "30px" }}>ROOM</th>
                <th style={{ fontSize: "30px" }}>Day : {currentDay}</th>
              </tr>
            </thead>

            <tbody>
              {users.map((val, index) => {
                return (
                  <tr key={index}>
                    <td
                      style={{
                        padding: "10px 3vw",
                        fontSize: "24px",
                        letterSpacing: "3px",
                        textAlign: "center",
                      }}
                    >
                      {val.time}
                    </td>
                    <td style={{ padding: "10px 5vw", fontSize: "24px" }}>
                      {val.teacher}
                    </td>
                    <td style={{ padding: "10px 5vw", fontSize: "24px" }}>
                      {val.subject}
                    </td>
                    <td style={{ padding: "10px 5vw", fontSize: "24px" }}>
                      {val.room}
                    </td>
                    <td>
                      {val.teacher != "--" && val.teacher != "Break" ? (
                        <button
                          style={{
                            color: "white",
                            background: "green",
                            borderRadius: "10px",
                            padding: "10px",
                            fontSize: "20px",
                          }}
                          onClick={() => {
                            setpage(true);
                            setdata({
                              time: val.time,
                              teachername: val.teacher,
                              subject: val.subject,
                              date: today,
                            });
                          }}
                        >
                          Take attendence
                        </button>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Attendencepage;
