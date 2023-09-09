import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import Noticepage from "./Noticepage";
import Takeattendence from "./Takeattendence";

const Attendencepage = (props) => {
  var arr = [];
  const [users, setusers] = useState([]);
  const [clas, setclas] = useState([]);

  const days = [
    "monday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "wednesday",
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
      setusers(data.Timetable);
    } else {
      const res = await fetch(
        `/getTT/teacher?day=${currentDay.toLowerCase()}&date=${today}`,
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
          if (val.teacher === props.data.name) {
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

  // console.log(props.data.type);
  useEffect(() => {
    showdata();
  }, []);

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
          <table
            border={"1px solid black"}
            cellPadding={"5px"}
            cellSpacing={"8px"}
          >
            <thead>
              <tr>
                <th style={{ fontSize: "30px", padding: "0px 2vw" }}>TIME</th>
                <th style={{ fontSize: "30px" }}>TEACHER</th>
                <th style={{ fontSize: "30px" }}>SUBJECT</th>
                {props.data.type === "teacher" ? (
                  <>
                    <th style={{ fontSize: "30px" }}>CLASS</th>
                    <th style={{ fontSize: "30px" }}>DIV</th>
                  </>
                ) : (
                  ""
                )}
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
                        padding: "10px 2vw",
                        fontSize: "24px",
                        letterSpacing: "3px",
                        textAlign: "center",
                      }}
                    >
                      {val.time}
                    </td>
                    <td style={{ padding: "10px 3vw", fontSize: "24px" }}>
                      {val.teacher}
                    </td>
                    <td style={{ padding: "10px 3vw", fontSize: "24px" }}>
                      {val.subject}
                    </td>
                    {props.data.type === "teacher" ? (
                      <>
                        <td style={{ padding: "10px 3vw", fontSize: "24px" }}>
                          {val.year + val.class}
                        </td>
                        <td style={{ padding: "10px 3vw", fontSize: "24px" }}>
                          {val.div}
                        </td>
                      </>
                    ) : (
                      ""
                    )}
                    <td style={{ padding: "10px 3vw", fontSize: "24px" }}>
                      {val.room}
                    </td>

                    <td>
                      {val.teacher != "--" &&
                      val.teacher != "Break" &&
                      val.status === "taken" ? (
                        <button
                          disabled
                          style={{
                            color: "white",
                            background: "red",
                            borderRadius: "10px",
                            padding: "10px",
                            fontSize: "20px",
                          }}
                        >
                          Attendence taken
                        </button>
                      ) : (
                        ""
                      )}

                      {val.teacher != "--" &&
                      val.teacher != "Break" &&
                      val.status != "taken" &&
                      props.data.type == "teacher" ? (
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
                              class: val.class,
                              div: val.div,
                              year: val.year,
                              id: val._id,
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
