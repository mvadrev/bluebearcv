import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import back_button from "./back.svg";
import "./enroll.css";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import axios from "axios";
import ImagePreview from "../ImagePreview/ImagePreview";

function Enroll() {
  let history = useHistory();

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  const [dataUri, setDataUri] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const isFullscreen = false;

  const enroll_server = () => {
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/users",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        full_name: fullname,
        email: email,
        photo_url: dataUri
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const retryfunc = () => {
    console.log("resetting image");
    setDataUri("");
  };

  return (
    <>
      <div className="app-head">
        <div className="header-text"> Enroll Face</div>
        <div className="header-text" onClick={() => history.push("/")}>
          <img src={back_button}></img>
        </div>
      </div>
      <div className="detect-body">
        {dataUri.length > 0 ? (
          <div>
            <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
            <button className="retry-btn" onClick={retryfunc}>
              Retry
            </button>
          </div>
        ) : (
          <div className="camdiv">
            <Camera
              onTakePhoto={dataUri => {
                handleTakePhoto(dataUri);
              }}
              className="camera"
            />
          </div>
        )}
      </div>
      <div className="details">
        <input
          className="enrollment-inp"
          placeholder="Full Name"
          onChange={e => setFullName(e.target.value)}
        ></input>
        <input
          className="enrollment-inp"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="submit-btndiv">
        <button className="submit-btn" onClick={enroll_server}>
          Enroll
        </button>
      </div>
    </>
  );
}

export default Enroll;
