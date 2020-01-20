import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Recorder from "./Recorder";

const Game = () => {
  const Buttons = ["Humming", "Sound", "Lyrics"];
  return (
    <MDBContainer className="app-color">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol sm={3} className="d-flex counter">
          <table className="full-width text-center">
            <tr>
              <th className="h3-responsive">You</th>
              <th className="h3-responsive">Server</th>
            </tr>
            <tr>
              <td className="h3-responsive">0</td>
              <td className="h3-responsive">0</td>
            </tr>
          </table>
        </MDBCol>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-5">
        <h2>Game 1, Round 1</h2>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-5">
        <h1>Recognize by</h1>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-3">
        {Buttons.map((elem, i) => (
          <MDBCol xs="2" key={i}>
            <MDBBtn className="stable-width" color="elegant">
              <h4 className="mb-0">{elem}</h4>
            </MDBBtn>
          </MDBCol>
        ))}
      </MDBRow>
      <MDBRow className="d-flex flex-column justify-content-center mt-3">
        <Recorder></Recorder>
      </MDBRow>
    </MDBContainer>
  );
};

export default Game;
