import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Homepage from "../components/Pages/Homepage";
import MainPage from "../components/Pages/MainPage";
import Profile from "../components/Pages/Profile";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Homepage} />
        <Route path="/mainpage" Component={MainPage} />
        <Route path="/mainpage/profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
