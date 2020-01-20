import React, { useState, useEffect } from "react";
import { MDBBtn, MDBRow, MDBCol } from "mdbreact";
import AudioRec from "react-audio-recorder";
import MicRecorder from "mic-recorder-to-mp3";
import { ReactMic } from "react-mic";
const Recorder = () => {
  const Mp3Recorder = new MicRecorder({ bitRate: 128 });
  const [isRecording, setRecording] = useState(false);
  const [isBlocked, setBlocked] = useState(false);
  const [Recorded, setRecorded] = useState('');
  const start = () => {
    if (isBlocked) {
      console.log("Permission Denied");
    } else {
      Mp3Recorder.start()
        .then(() => {
          setRecording(true);
        })
        .catch(e => console.error(e));
    }
  };
  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setBlocked(false);
      },
      () => {
        console.log("Permission Denied");
        setBlocked(true);
      }
    );
  });
  const onStop = recordedBlob => {
    setRecorded(recordedBlob);
  };
  return (
    <>
    <MDBCol lg={7} className="align-self-center">
      <ReactMic
        record={isRecording}
        className="sound-wave normalize-width"
        onStop={onStop}
        strokeColor="#FFF"
        backgroundColor="#3a3a3a"
      />
      </MDBCol>
      <MDBRow>
      <MDBBtn
        className="stable-width mx-auto"
        color="elegant"
        onClick={e => setRecording(!isRecording)}
      >
        <h4 className="mb-0">{isRecording ? "Stop" : "Record"}</h4>
      </MDBBtn>
      {Recorded ? (
        <MDBBtn
          className="stable-width mx-auto"
          color="elegant"
          onClick={e => setRecording(!isRecording)}
        >
          <h4 className="mb-0">Finish</h4>
        </MDBBtn>
      ) : (
        ""
      )}
      </MDBRow>
    </>
  );
};

export default Recorder;