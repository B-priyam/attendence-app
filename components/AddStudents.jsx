import React, { useState } from "react";
// import {  FormControl , FormLabel , Button ,Container} from '@chakra-ui/react'
// import { VStack } from '@chakra-ui/layout';
// import { Input } from '@chakra-ui/input';

const AddStudents = () => {
  //   const [show,setshow] = useState(false)
  const [user, setuser] = useState({
    name: "",
    Roll_no: 0,
    Id_no: 0,
    clas: "",
    div: "",
    year: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setuser({ ...user, [name]: value });
  };

  //   const handleClick =  ()=>setshow(!show)
  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, Roll_no, Id_no, clas, div, year } = user;
    const res = await fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        Roll_no,
        Id_no,
        clas,
        div,
        year,
      }),
    });
    const data = await res.json();
    if (!data) {
      alert("Invalid Credentials");
    } else {
      console.log(data);
      alert("successfull login");
    }
  };
  return (
    <div padding="5rem">
      <form action="" method="post" border="2px solid black">
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={change}
          placeholder="name"
        />{" "}
        <br />
        <input
          type="number"
          name="Roll_no"
          id="Roll_no"
          value={user.Roll_no}
          onChange={change}
          placeholder="roll no"
        />{" "}
        <br />
        <input
          type="number"
          name="Id_no"
          id="Id_no"
          value={user.Id_no}
          onChange={change}
          placeholder="id"
        />{" "}
        <br />
        <input
          type="text"
          name="clas"
          id="clas"
          value={user.clas}
          onChange={change}
          placeholder="class"
        />
        <br />
        <input
          type="text"
          name="div"
          id="div"
          value={user.div}
          onChange={change}
          placeholder="div"
        />
        <br />
        <input
          type="text"
          name="year"
          id="year"
          value={user.year}
          onChange={change}
          placeholder="year"
        />
        <br />
        <input type="submit" value={"register"} onClick={submitHandler} />
      </form>
    </div>
  );
};

export default AddStudents;
