import React, { useState } from "react";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Container,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import SignUp from "../studentlogin";
import TeachersLogin from "../TeachersLogin";
import TeacherSignup from "../TeacherSignup";

const Homepage = () => {
  const [login, setlogin] = useState(true);
  const [loginvalue, setloginvalue] = useState("Not Registered");
  const [display, setdisplay] = useState("");

  const changeloginState = () => {
    setlogin(!login);
    setloginvalue("Already Registered");
  };
  const changedisplay = () => {
    setdisplay("");
  };
  const changedisplay1 = () => {
    setdisplay("none");
  };

  return (
    <div>
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg={"white"}
          w="100%"
          m="40px 0px 15px 0px"
          borderRadius="1g"
          borderWidth="1px"
        >
          <Text fontSize="4xl" textAlign="center">
            ATTENDENCE APP
          </Text>
        </Box>
        <Box bg={"white"} w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList>
              <Tab width={"50%"} onClick={changedisplay}>
                {" "}
                Teacher{" "}
              </Tab>
              <Tab width={"50%"} onClick={changedisplay1}>
                {" "}
                Student{" "}
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {login ? <TeachersLogin /> : <TeacherSignup />}
              </TabPanel>
              <TabPanel>
                <SignUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text align={"center"} style={{ display: display }}>
            {" "}
            {loginvalue} ? <Link onClick={changeloginState}> Click here </Link>{" "}
          </Text>
        </Box>
      </Container>
    </div>
  );
};

export default Homepage;
