import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Attendence from "../components/Attendence";
import { ChakraProvider } from "@chakra-ui/react";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <CookiesProvider>
        {/* <App /> */}
        <Attendence />
      </CookiesProvider>
    </ChakraProvider>
  </React.StrictMode>
);
