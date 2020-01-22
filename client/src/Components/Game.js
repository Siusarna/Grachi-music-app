import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Recorder from "./Recorder";
import Texter from "./Texter";

const Game = () => {
  const [activeButton, setActive] = useState("");
  const Buttons = ["humming", "sound", "lyrics"];
  const handleClick = e => {
    console.log(e.target.innerText);
    setActive(e.target.innerText.toLowerCase());
  };
  return (
    <MDBContainer className="app-color">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol sm={5} className="d-flex counter">
          <table className="full-width text-center">
            <tr>
              <th className="h3-responsive th-sm">You</th>
              <th className="h3-responsive th-sm">Server</th>
            </tr>
            <tr>
              <td className="h3-responsive">0</td>
              <td className="h3-responsive">0</td>
            </tr>
          </table>
        </MDBCol>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-8">
        <h2>Game 1, Round 2</h2>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-10">
        <h1>Recognize by</h1>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-3">
        {Buttons.map((elem, i) => (
          <MDBCol xs="2" key={i}>
            <MDBBtn
              className="stable-width"
              color="elegant"
              disabled={activeButton === elem ? true : false}
              onClick={handleClick}
            >
              <h4 className="mb-0">{elem}</h4>
            </MDBBtn>
          </MDBCol>
        ))}
      </MDBRow>
      <MDBRow className="d-flex flex-column justify-content-center mt-3">
        {activeButton ? (
          activeButton === Buttons[0] || activeButton === Buttons[1] ? (
            <Recorder></Recorder>
          ) : (
            <Texter></Texter>
          )
        ) : (
          ""
        )}
      </MDBRow>
    </MDBContainer>
  );
};

export default Game;
