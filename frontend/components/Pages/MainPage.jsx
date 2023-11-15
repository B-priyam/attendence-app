import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import Attendencepage from "../Attendencepage";
import Noticepage from "../Noticepage";
import "/css/mainpage.css";
import Profile from "./Profile";
import { Cookies, useCookies } from "react-cookie";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CheckInternet from "../checkInternet";
import Attendence from "../Attendence";
import TeacherAttendence from "../TeacherAttendence";
import { redirect } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const type = localStorage.getItem("type");
  useEffect(() => {
    if (!user) {
      return navigate("/");
    } else {
      find();
    }
  }, []);

  let Type = type === "teacher" ? "UID" : "Id_no";
  const [value, setvalue] = useState([]);
  const find = async () => {
    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/signin/${type}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [Type]: user,
          status: "find",
        }),
      }
    );
    const data = await res.json();
    if (res.status === 200 && data) {
      // console.log(data);

      type === "teacher" ? setvalue(data.userdata) : setvalue(data.data);
    }
  };

  const date = () => {
    var today = new Date();
    let data =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();
    return data;
  };
  const [page, setpage] = useState("home");
  const pagerender = () => {
    if (page === "home") {
      return <Attendencepage data={value} />;
    } else if (page === "notice") {
      return <Noticepage data={type} />;
    } else if (page === "profile") {
      return <Profile data={value} />;
    } else {
      if (value.type === "student") {
        return <Attendence name={value.name} />;
      } else {
        return <TeacherAttendence name={value.name} />;
      }
    }
  };
  return (
    <>
      <Box style={{ overflow: "hidden" }}>
        <Box
          width={"100vw"}
          bg={"#FF8C00"}
          height={"10vh"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"0 2vw"}
        >
          <Box display={{ base: "inline-block", md: "none", lg: "none" }}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant={"ghost"}
                textTransform={"uppercase"}
              >
                {page}
              </MenuButton>
              <MenuList fontSize={"15px"}>
                <MenuItem onClick={() => setpage("home")}>Home</MenuItem>
                <MenuItem onClick={() => setpage("notice")}>Notice</MenuItem>
                <MenuItem onClick={() => setpage("attendence")}>
                  Attendence
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
          <Box
            display={{ base: "none", md: "inline", lg: "inline" }}
            width={"30%"}
            fontSize={"24px"}
          >
            <List display={"flex"} justifyContent={"space-between"}>
              <ListItem onClick={() => setpage("home")} cursor={"pointer"}>
                Home
              </ListItem>
              <ListItem onClick={() => setpage("notice")} cursor={"pointer"}>
                Notice
              </ListItem>
              <ListItem
                onClick={() => setpage("attendence")}
                cursor={"pointer"}
              >
                Attendence
              </ListItem>
            </List>
          </Box>
          <Box fontSize={{ base: "18px", md: "25px", lg: "32px" }}>
            <Text
              color={"white"}
              textTransform={"uppercase"}
              fontWeight={"700"}
              cursor={"default"}
            >
              Attendence App
            </Text>
          </Box>
          <Box>
            <Avatar
              name={value.name}
              src={value.profilePic}
              size={"md"}
              onClick={() => setpage("profile")}
              cursor={"pointer"}
            />
          </Box>
        </Box>
        <Container
          display="flex"
          flexWrap="wrap"
          maxW={{ base: "97vw", lg: "95vw" }}
          height="max-content"
          background="white"
          boxShadow="5px 5px 10px gray"
          gap={{ base: "0px", lg: "5vw" }}
          border="1px solid rgba(0,0,0,0.1)"
          borderRadius="10px"
          marginTop="5vh"
          paddingInline={{ base: "0", lg: "7vh" }}
        >
          {pagerender()}
        </Container>
      </Box>
    </>
  );
};

export default MainPage;
