import React, { useState, useEffect } from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { ReactMic } from "@cleandersonlobo/react-mic";
import { songResponse, addToHistory, pendingStatus } from "../redux/actions";
import { connect } from "react-redux";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const Recorder = ({
  songResponse,
  addToHistory,
  apiQuery,
  pendingStatus,
  songs
}) => {
  const [isRecording, setRecording] = useState(false);
  const [Recorded, setRecorded] = useState({});
  const [isFinished, setFinished] = useState(false);
  const onStop = recordedBlob => {
    setRecorded(recordedBlob);
    setFinished(true);
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onFinish = async ({ target }) => {
    let controlElem = target;
    if (target.children.length === 0) {
      controlElem = target.parentElement;
    }
    controlElem.children[0].innerText = "Waiting";
    pendingStatus();
    const fd = new FormData();
    fd.append("recognize", Recorded.blob, "recognize.mp3");
    const url =
      apiQuery === "sound" ? "/api/recognize" : "/api/recognizeByHumming";
    const data = await fetch(url, {
      method: "POST",
      body: fd
    })
      .then(res => res.ok ? res.json() : {message: 'error'})
      .catch(err => console.log('Something went wrong'));
    songResponse(data);
    if (data) {
      addToHistory(data);
    }
  };
  return (
    <>
      <MDBCol xs={'1'} className="align-self-center">
        <ReactMic
          record={isRecording}
          className="sound-wave normalize-width rounded-borders"
          onStop={onStop}
          strokeColor="#FFF"
          backgroundColor="#3a3a3a"
          mimeType="audio/mp3"
          width={windowDimensions.width > 840 ? "640" : "300"}
        />
      </MDBCol>
      <MDBRow className="justify-content-center">
        <MDBBtn
          className="stable-width"
          color="elegant"
          onClick={e => setRecording(!isRecording)}
        >
          <h4 className="mb-0">{isRecording ? "Stop" : "Record"}</h4>
        </MDBBtn>
        <MDBBtn
          className="stable-width"
          color="elegant"
          onClick={onFinish}
          disabled={!isRecording && isFinished && !songs.pending ? false : true}
        >
          <h4 className="mb-0">Finish</h4>
        </MDBBtn>
      </MDBRow>
    </>
  );
};

const mapDispatchToProps = {
  songResponse,
  addToHistory,
  pendingStatus
};

const mapStateToProps = ({ songs }) => ({
  songs
});

export default connect(mapStateToProps, mapDispatchToProps)(Recorder);
