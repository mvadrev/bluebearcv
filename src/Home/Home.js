import React, { useState } from "react";
import "./Home.css";
import Enroll from "./../Enroll/Enroll";
import back_button from "./../Enroll/back.svg";
import { useHistory } from "react-router-dom";
import mark from "./images/mark.png";
import face from "./images/face.png";
import today from "./images/today.png";
import facelib from "./images/people.png";
import hist from "./images/history.png";
import logo from "./images/logo.png";
import help from "./images/help.svg";

function Home() {
  let history = useHistory();
  return (
    <div className="App">
      <div className="home-head">
        <div className="homehead-logodiv">
          <img src={logo} height="45px"></img>
        </div>
        <div className="app-header-text"> ZenFace</div>
        <div className="app-header-text">
          {" "}
          <img src={help}></img>
        </div>
      </div>
      <div className="app-body">
        <div className="card" onClick={() => history.push("/enroll")}>
          <div className="cardimagediv">
            <img src={face}></img>
          </div>
          <div>Enroll Face</div>
        </div>
        <div className="card" onClick={() => history.push("/attendance")}>
          <div className="cardimagediv">
            <img src={mark}></img>
          </div>
          <div>Mark Attendance</div>
        </div>
        <div className="card">
          <div className="cardimagediv">
            <img src={today}></img>
          </div>
          <div>Today's Attendance</div>
        </div>
        <div className="card" onClick={() => history.push("/facelib")}>
          <div className="cardimagediv">
            <img src={facelib}></img>
          </div>
          <div>Face library</div>
        </div>
        <div className="card">
          <div className="cardimagediv">
            <img src={hist}></img>
          </div>
          <div>History</div>
        </div>
      </div>

      <div className="app-foot"></div>
    </div>
  );
}

export default Home;
