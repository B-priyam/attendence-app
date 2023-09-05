import React, { useState } from "react";
import { Container, List, space } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
// import Studentlogin from "../studentlogin";
import Attendencepage from "../Attendencepage";
import Noticepage from "../Noticepage";
import "/css/mainpage.css";

const MainPage = () => {
  const location = useLocation();

  const date = () => {
    var today = new Date();
    let data =
      today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
    return data;
  };

  const [page, setpage] = useState("home");

  const pagerender = () => {
    if (page === "home") {
      return <Attendencepage data={location.state.data} />;
    } else {
      return <Noticepage />;
    }
  };
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div className="main">
          <div className="body">
            <div className="content">
              <li
                style={{ listStyle: "none", cursor: "pointer" }}
                value={"home"}
                onClick={() => {
                  setpage("home");
                }}
              >
                Home
              </li>
            </div>
            <div className="content">
              <li
                style={{ listStyle: "none", cursor: "pointer" }}
                value={"notices"}
                onClick={() => {
                  setpage("notice");
                }}
              >
                Notices
              </li>
            </div>
            <div
              style={{ width: 640, color: "#101010", fontSize: 60 }}
              className="content"
            >
              ATTENDENCE APP
            </div>
          </div>
          <img
            style={{ width: 60, height: 60, borderRadius: 50 }}
            src="../images/profile_pic.png"
          />
          <h2
            style={{ minWidth: "100px", marginLeft: "10px", fontSize: "20px" }}
          >
            {date()}
          </h2>
        </div>

        <Container
          style={{
            display: "flex",
            flexWrap: "wrap",
            maxWidth: "95vw",
            height: "max-content",
            background: "white",
            boxShadow: "5px 5px 10px gray",
            minHeight: "80vh",
            gap: "6vh",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "10px",
            margin: "5vh",
            paddingInline: "7vh",
          }}
        >
          {pagerender()}
        </Container>
      </div>
    </>
  );
};

export default MainPage;
