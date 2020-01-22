import React, { useState, useEffect } from "react";
import Enroll from "../Enroll/Enroll";
import back_button from "./images/back.svg";
import { useHistory } from "react-router-dom";
import "./Facelib.css";
import back from "./images/back.svg";
import axios from "axios";

function Facelib() {
  const [user_list, setUser_list] = useState([]);

  let history = useHistory();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:3001/users",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        setUser_list(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="facelib-head">
        <div className="facelib-  header-text">Face Library</div>
        <div className="header-text" onClick={() => history.push("/")}>
          <img src={back}></img>
        </div>
      </div>
      <div className="facelib-body">
        {user_list.map((i, id) => (
          <div className="facelib-card" key={i.id}>
            <div>
              <img height="150rem" src={i.photo_url} />
            </div>
            <div>{i.full_name}</div>
          </div>
        ))}
      </div>
      <div className="facelib-foot"></div>
    </>
  );
}

export default Facelib;
