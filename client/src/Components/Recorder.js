import React, { useState, useEffect } from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import AudioRec from "react-audio-recorder";
import MicRecorder from "mic-recorder-to-mp3";
import { ReactMic } from "react-mic";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Recorder = () => {
  const Mp3Recorder = new MicRecorder({ bitRate: 128 });
  const [isRecording, setRecording] = useState(false);
  const [isBlocked, setBlocked] = useState(false);
  const [Recorded, setRecorded] = useState("");
  const onStop = recordedBlob => {
    setRecorded(recordedBlob);
  };
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <MDBCol xs={1} className="align-self-center">
        <ReactMic
          record={isRecording}
          className="sound-wave normalize-width rounded-borders"
          onStop={onStop}
          strokeColor="#FFF"
          backgroundColor="#3a3a3a"
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
          onClick={e => setRecording(!isRecording)}
          disabled={isRecording || !Recorded ? true : false}
        >
          <h4 className="mb-0">Finish</h4>
        </MDBBtn>
      </MDBRow>
    </>
  );
};

export default Recorder;
