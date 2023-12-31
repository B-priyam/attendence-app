import React, { useEffect, useState, useRef } from "react";
import "/css/profilepage.css";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AddIcon,
  EditIcon,
  DeleteIcon,
  ChevronDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
  useDisclosure,
  Select,
  useToast,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Avatar,
  FormErrorMessage,
} from "@chakra-ui/react";
import AddStudents from "../AddStudents";
import UpdateTT from "../updateTT";
const Profile = (props) => {
  const [renderpage, setrenderpage] = useState("profile");
  const [modelname, setmodelname] = useState();
  const [Id_no, setId_no] = useState();
  const [value, setvalue] = useState();
  let [valuedata, setvaluedata] = useState();
  const btnref = React.useRef(null);
  const navigate = useNavigate();
  const { name, Class, email, year, div, type, UID } = props.data;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setloading] = useState(false);
  const [picdata, setpic] = useState("");
  const [cld, setcld] = useState("");
  const [notValid, setNotValid] = useState(false);
  const [idValid, setIdValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const Toast = useToast();
  const logoutPage = () => {
    localStorage.clear();
    navigate("/");
  };

  const postDetails = async (pic) => {
    setloading(true);
    if (pic === undefined) {
      Toast({
        title: "please select an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }
    if (
      pic.type === "image/jpg" ||
      pic.type === "image/png" ||
      pic.type === "image/jpeg"
    ) {
      const data = new FormData();
      data.append("file", pic);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "priyam3801h");
      console.log(data);
      await fetch("https://api.cloudinary.com/v1_1/priyam3801h/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => {
          console.log(data);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setpic(data.url.toString());
          setcld(data.public_id.toString());
          setloading(false);
        })
        .catch((e) => {
          Toast({
            title: "error",
            description: e.message,
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
          setloading(false);
        });
      return;
    }
  };
  const deletepic = async () => {
    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/updateProfilePic?type=${type}&Id_no=${
        type == "student" ? props.data.Id_no : UID
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          profilePic: picdata,
          cloudinary: cld,
        }),
      }
    );
    const data = await res.json();
    if (res.status === 400) {
      Toast({
        title: "OOPS !!",
        description: data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Data updated successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
    setloading(false);
  };

  const deleteStudent = async (e) => {
    e.preventDefault();

    setIdValid(false);
    if (!/^([1-9]{6,})$/.test(Id_no)) {
      setIdValid(true);
      setErrorMessage("Id_no cannot be less than 6 digits");
      return document.querySelector("#id").focus();
    }

    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/deletestudent?Id_no=${Id_no}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (!data || res.status === 400) {
      Toast({
        title: e.message,
        description: "Kindly try again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Student Deleted Successfully",
        description: e.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    }
  };
  const updateStudent = async (e) => {
    e.preventDefault();

    setIdValid(false);
    setNotValid(false);
    if (!/^([0-9]{6,})$/.test(Id_no)) {
      setIdValid(true);
      setErrorMessage("Id_no cannot be less than 6 digits");
      return document.querySelector("#id").focus();
    }

    if (
      value === "email" &&
      !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(valuedata)
    ) {
      setNotValid(true);
      setErrorMessage("Please provide a valid email Id");
      return document.querySelector("#valuedata").focus();
    }

    if (!valuedata) {
      Toast({
        title: "Kindly fill all the details",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (value === "div") {
      valuedata = valuedata.toUpperCase();
    } else if (value === "year" || value === "Class") {
      valuedata = valuedata.toLowerCase();
    }

    const capitalize = (str) => {
      const lower = str.toLowerCase();
      return `${lower[0].toUpperCase()}${lower.slice(1)}`;
    };

    if (value === "name") {
      valuedata = capitalize(valuedata);
    }

    setloading(true);
    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/updatestudent?Id_no=${Id_no}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [value]: valuedata,
        }),
      }
    );
    const data = await res.json();
    if (!data || res.status === 400) {
      Toast({
        title: e.message,
        description: "Kindly try again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Data Updated Successfully",
        description: e.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    }
  };
  const editProfile = async (e) => {
    e.preventDefault();

    if (!valuedata) {
      Toast({
        title: "kindly fill all the data",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    if (modelname === "div") {
      valuedata = valuedata.toUpperCase();
    } else if (modelname === "year" || modelname === "Class") {
      valuedata = valuedata.toLowerCase();
    }

    const res = await fetch(
      `https://attendence-app-nbtf.onrender.com/editProfile?type=${type}&Id_no=${
        type == "student" ? props.data.Id_no : UID
      }`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [modelname]: valuedata,
        }),
      }
    );
    const data = await res.json();
    if (!data || res.status === 400) {
      Toast({
        title: e.message,
        description: "Kindly try again",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    } else {
      Toast({
        title: "Data Updated Successfully",
        description: e.message,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      setloading(false);
    }
  };

  return (
    <>
      {renderpage === "profile" ? (
        <Box
          className="body"
          display={{ base: "flex" }}
          flexDirection={{ base: "column", md: "row", lg: "row" }}
          padding={"15vh 0px"}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              className="profilePic"
              marginTop={{ base: "-90px", md: "0", lg: "0" }}
              fontSize={"100px"}
            >
              <Avatar
                height={"100%"}
                width={"100%"}
                className="image"
                src={props.data.profilePic}
                name={props.data.name}
                fontSize={"100px"}
                objectFit={"cover"}
                style={{ fontSize: "larger" }}
                size={"100%"}
              />
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <button
                className="changePic"
                onClick={() => {
                  onOpen();
                  setmodelname("pic");
                }}
              >
                Change Profile Pic
              </button>
            </Box>
          </Box>
          <Box
            className="data"
            display={"flex"}
            flexDirection={{ base: "column", md: "row", lg: "row" }}
            mt={{ base: "-100px", md: "0px", lg: "0px" }}
          >
            <List
              fontSize={{ base: "20px", md: "24px", lg: "32px" }}
              width={{ base: "90vw" }}
            >
              {type === "student" ? (
                <>
                  <ListItem color={"blackAlpha.800"}>
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("name");
                      }}
                    />
                    Name :{name}
                  </ListItem>
                  <ListItem>
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("Class");
                      }}
                    />
                    Class : {Class}
                  </ListItem>
                  <ListItem>
                    {" "}
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("email");
                      }}
                    />
                    Email : {email}
                  </ListItem>
                  <li>
                    {" "}
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("year");
                      }}
                    />
                    Year : {year}
                  </li>
                  <li>
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("div");
                      }}
                    />
                    Div : {div}
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("name");
                      }}
                    />
                    Name : {name}
                  </li>
                  <li>
                    <EditIcon
                      className="editProfile"
                      onClick={() => {
                        onOpen();
                        setmodelname("email");
                      }}
                    />
                    Email : {email}
                  </li>
                </>
              )}
            </List>
            <Divider />
            {type === "teacher" && window.innerWidth > 500 ? (
              <Box className="btns">
                <button
                  className="btn-style"
                  onClick={function () {
                    onOpen();
                    setmodelname("add");
                  }}
                  ref={btnref}
                >
                  <AddIcon className="icons" fontSize={{ base: "2xl" }} />
                  Add Student
                </button>
                <button
                  className="btn-style"
                  onClick={function () {
                    onOpen();
                    setmodelname("update");
                  }}
                >
                  <EditIcon className="icons" />
                  Update Student
                </button>
                <button
                  className="btn-style"
                  onClick={function () {
                    onOpen();
                    setmodelname("delete");
                  }}
                >
                  <DeleteIcon className="icons" />
                  Delete Student
                </button>
              </Box>
            ) : window.innerWidth < 500 && type === "teacher" ? (
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  Student Control
                </MenuButton>
                <MenuList>
                  <MenuItem
                    icon={<AddIcon />}
                    onClick={() => {
                      onOpen();
                      setmodelname("add");
                    }}
                  >
                    Add Student
                  </MenuItem>
                  <MenuItem
                    icon={<EditIcon />}
                    onClick={() => {
                      onOpen();
                      setmodelname("update");
                    }}
                  >
                    Update Student
                  </MenuItem>
                  <MenuItem
                    icon={<DeleteIcon />}
                    onClick={() => {
                      onOpen();
                      setmodelname("delete");
                    }}
                  >
                    Delete Student
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              ""
            )}
            {type === "teacher" ? (
              <button
                className="Update-btn"
                onClick={() => setrenderpage("updateTT")}
              >
                Update Timetable
              </button>
            ) : (
              ""
            )}
            <button className="logout-btn" onClick={logoutPage}>
              LOGOUT
            </button>
          </Box>
          <div>
            <Modal
              onClose={onClose}
              finalFocusRef={btnref}
              isOpen={isOpen}
              scrollBehavior={"inside"}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>
                  {modelname == "add"
                    ? "Add Student"
                    : modelname == "update"
                    ? "Update Student"
                    : modelname === "delete"
                    ? "Delete Student"
                    : modelname}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {modelname == "add" ? (
                    <AddStudents />
                  ) : modelname == "update" ? (
                    <VStack spacing="5px" color="black">
                      <FormControl
                        id="id"
                        isRequired
                        isInvalid={idValid}
                        onChange={() => {
                          setIdValid(false);
                        }}
                      >
                        <FormLabel>Id no</FormLabel>
                        <Input
                          placeholder="Enter Id_no of the student"
                          onChange={(e) => setId_no(e.target.value)}
                          name="Id_no"
                          value={Id_no}
                        ></Input>
                        <FormErrorMessage>{errorMessage}</FormErrorMessage>
                      </FormControl>
                      <FormControl onChange={() => setNotValid(false)}>
                        <FormLabel>Choose the field to update</FormLabel>
                        <Select onChange={(e) => setvalue(e.target.value)}>
                          <option value={"name"}>Name</option>
                          <option value={"Roll_no"}>Roll no</option>
                          <option value={"email"}>Email</option>
                          <option value={"Class"}>Class</option>
                          <option value={"div"}>Div</option>
                          <option value={"year"}>Year</option>
                        </Select>
                        <FormControl
                          isRequired
                          id="valuedata"
                          isInvalid={notValid}
                        >
                          <FormLabel>New Value</FormLabel>
                          <Input
                            type={value === "Roll_no" ? "number" : "text"}
                            placeholder="Enter the new value"
                            name="newValue"
                            value={valuedata}
                            onChange={(e) => setvaluedata(e.target.value)}
                          ></Input>
                          <FormErrorMessage>{errorMessage}</FormErrorMessage>
                        </FormControl>
                      </FormControl>
                      <Button
                        colorScheme="yellow"
                        width="100%"
                        style={{ marginTop: 15 }}
                        onClick={updateStudent}
                        isLoading={loading}
                      >
                        Update Student
                      </Button>
                    </VStack>
                  ) : modelname == "delete" ? (
                    <VStack spacing="5px" color="black">
                      <FormControl
                        id="id"
                        isRequired
                        isInvalid={idValid}
                        onChange={() => setIdValid(false)}
                      >
                        <FormLabel>Id no</FormLabel>
                        <Input
                          type="number"
                          placeholder="Enter Id_no of the student"
                          onChange={(e) => setId_no(e.target.value)}
                          name="Id_no"
                        ></Input>
                        <FormErrorMessage>{errorMessage}</FormErrorMessage>
                      </FormControl>
                      <Button
                        colorScheme="red"
                        width="100%"
                        style={{ marginTop: 15 }}
                        onClick={deleteStudent}
                        isLoading={loading}
                      >
                        Delete Student Permanently
                      </Button>
                    </VStack>
                  ) : modelname == "pic" ? (
                    <VStack>
                      <FormControl id="set image" isRequired>
                        <FormLabel>{modelname}</FormLabel>
                        <Input
                          type="file"
                          p={1.5}
                          accept="image/*"
                          onChange={(e) => {
                            postDetails(e.target.files[0]);
                          }}
                          name="profilePic"
                        ></Input>
                      </FormControl>
                      <Button
                        colorScheme="green"
                        width="100%"
                        style={{ marginTop: 15 }}
                        onClick={deletepic}
                        isLoading={loading}
                      >
                        Update {modelname}
                      </Button>
                    </VStack>
                  ) : (
                    <VStack>
                      <FormControl id="ID_no" isRequired>
                        <FormLabel>{modelname}</FormLabel>
                        <Input
                          placeholder={`Enter new value of ${modelname}`}
                          onChange={(e) => setvaluedata(e.target.value)}
                          name={modelname}
                        ></Input>
                      </FormControl>
                      <Button
                        colorScheme="green"
                        width="100%"
                        style={{ marginTop: 15 }}
                        onClick={editProfile}
                        isLoading={loading}
                      >
                        Update {modelname}
                      </Button>
                    </VStack>
                  )}
                </ModalBody>
                <ModalFooter display={"flex"} alignItems={"center"}>
                  <Button
                    display={"flex"}
                    alignItems={"center"}
                    colorScheme="red"
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </Box>
      ) : (
        <UpdateTT />
      )}
    </>
  );
};
export default Profile;
