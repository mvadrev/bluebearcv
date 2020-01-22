import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "react-html5-camera-photo/build/css/index.css";
import axios from "axios";
import ImagePreview from "../ImagePreview/ImagePreview";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "./Attendance.css";
import back_button from "./back.svg";

const Attendance = () => {
  let history = useHistory();

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setDataUri(dataUri);
    console.log(dataUri);
  }

  const retryfunc = () => {
    console.log("resetting image");
    setDataUri("");
    setFaceResponse([]);
  };

  const [dataUri, setDataUri] = useState("");
  const isFullscreen = false;
  const [faceresponse, setFaceResponse] = useState([]);

  const sendImgServer = () => {
    console.log("Sending image");
    axios({
      method: "post",
      url: "http://127.0.0.1:3001/rek",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        photo_url: dataUri
      }
    })
      .then(response => {
        console.log(response);
        setFaceResponse(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  console.log(faceresponse);

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

      <div className="submit-btndiv">
        <button className="submit-btn" onClick={sendImgServer}>
          SEND
        </button>
      </div>
      {faceresponse.length > 0 ? (
        <div className="details-div">Hi!</div>
      ) : (
        <div>No image</div>
      )}
    </>
  );
};

export default Attendance;
