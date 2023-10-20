import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

const Attendence = () => {
  const [date, setdate] = useState("");
  console.log(date);
  const SubmitHandler = async () => {
    const res = await fetch("http://localhost:5000/postAttendence", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("🥲");
    }
  };
  return (
    <div>
      <input
        type="date"
        min="2023-09-02"
        onChange={(e) => setdate(e.target.value)}
      />
      {/* {alert("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf("Dec") / 3 + 1)} */}
      <button onClick={SubmitHandler}>Submit</button>

      <Input type="date" />
    </div>
  );
};

export default Attendence;
