import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Enroll from "./Enroll/Enroll";
import back_button from "./Enroll/back.svg";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home/Home";
import Facelib from "./Facelib/Facelib";
import Attendance from "./Attendance/Attendance";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/enroll" component={Enroll} />
        <Route exact path="/attendance" component={Attendance} />
        <Route exact path="/facelib" component={Facelib} />
      </div>
    </BrowserRouter>
  );
}

export default App;
