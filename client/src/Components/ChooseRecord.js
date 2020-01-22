import React, {useState} from 'react'
import Recorder from "./Recorder";
import Texter from "./Texter";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const ChooseRecord = () => {
    const [activeButton, setActive] = useState("");
    const Buttons = ["humming", "sound", "lyrics"];
    const handleClick = e => {
        console.log(e.target.innerText);
        setActive(e.target.innerText.toLowerCase());
      };
    return (
        <>
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
      </>
    )
}

export default ChooseRecord
