import React, { useEffect, useState } from "react";
import { Input, Box, useToast, Textarea } from "@chakra-ui/react";
import "../css/noticepage.css";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useLocation } from "react-router-dom";
import CheckInternet from "./checkInternet";

const Noticepage = (props) => {
  const date = new Date();
  let hrs = date.getHours();
  if (hrs > 12) {
    date.setHours(hrs % 12);
  }
  let min = date.getMinutes();
  const [value, setvalue] = useState("");
  const [notices, setnotices] = useState([]);
  const Toast = useToast();
  const location = useLocation();
  const onAdd = async () => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/postnotice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          time: date.getHours() + ":" + min,
          notice: value,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400 || !data) {
      Toast({
        title: "OOPS",
        description: data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Notice Uploaded Successfully",
        // description: data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setvalue("");
    }
  };

  const data = async () => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/getnotice",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setnotices(data.data);
  };

  const deleteNotice = async (id) => {
    const res = await fetch(
      "https://attendence-app-nbtf.onrender.com/deleteNotice",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      }
    );
    const data = await res.json();
    if (!data || res.status === 400) {
      Toast({
        title: "OOPS !!!",
        description: data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Congratulations",
        description: data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    if (!navigator.onLine) {
      return <CheckInternet />;
    }
    data();
  });

  return (
    <div>
      {props.data === "teacher" ? (
        <div className="inputBox">
          <p>
            <Textarea
              minH={{ base: "7vh", lg: "10px" }}
              maxH={"5vw"}
              variant="flushed"
              placeholder="Enter New Notice Here"
              width={"70vw"}
              textAlign={"center"}
              value={value}
              onChange={(e) => setvalue(e.target.value)}
            />
          </p>
          <AddIcon
            boxSize={10}
            border={"1px solid white"}
            color={"grey"}
            cursor={"pointer"}
            borderRadius={"5px"}
            padding={"5px"}
            onClick={onAdd}
          />
        </div>
      ) : (
        <h1
          style={{
            textAlign: "center",
            fontSize: "48px",
            marginBottom: "-50px",
          }}
        >
          ALL NOTICES
        </h1>
      )}
      <div className="shownotice">
        <Box
          width={"80vw"}
          bg={"white"}
          alignItems={"center"}
          minH={"40vh"}
          borderRadius={"10px"}
          boxShadow={"1px 1px 8px grey"}
          maxH={"max-content"}
        >
          <ul>
            {notices
              .slice(0)
              .reverse()
              .map((val) => {
                return (
                  <div key={val._id}>
                    <li
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        width: "70vw",
                        textAlign: "center",
                        marginLeft: "20px",
                      }}
                    >
                      {val.notice}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span style={{ color: "grey" }}>{val.date}</span>
                        <span style={{ color: "grey" }}>{val.Time}</span>
                      </div>
                    </li>
                    <span>
                      {props.data === "teacher" ? (
                        <DeleteIcon
                          color={"red"}
                          float={"right"}
                          fontSize={{ base: "25px", lg: "30px" }}
                          mt={"-60px"}
                          mr={{ base: "2px", lg: "20px" }}
                          cursor={"pointer"}
                          onClick={() => {
                            deleteNotice({ id: val._id });
                          }}
                        />
                      ) : (
                        ""
                      )}
                    </span>
                    <hr />
                  </div>
                );
              })}
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default Noticepage;
