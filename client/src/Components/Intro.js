import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn
} from "mdbreact";

const Intro = () => {
  const [isStarter, setPage] = useState(true);
  const showInstructions = () => {
    setPage(!isStarter);
    console.log("done");
  };
  const Buttons = [
    { name: isStarter ? "Instructions" : "Start Page", func: showInstructions },
    { name: "Start", func: "startGame" }
  ];
  return (
    <MDBContainer className="d-flex align-self-center flex-column">
      <MDBRow className="justify-content-center mx-0">
        <MDBCard className={`${isStarter ? 'animate-main' : ''} to-normal-size`}>
          <MDBCardTitle>
            <h2 className="h2-responsive text-center font-weight-normal pt-4 pr-2 pl-2">
              {isStarter ? `Welcome to Music-Akinator App!` : `Instructions`}
            </h2>
          </MDBCardTitle>
          <MDBCardBody className="pt-1">
            <h3 className="text-center h3-responsive">
              {isStarter
                ? `This is gaming app, which allows you to challenge our mighty server
            in song recognition. Feel free to read instructions before starting
            the game.`
                : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
            </h3>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
      <MDBRow className="justify-content-center mt-3">
        {Buttons.map((elem, i) => (
          <MDBCol xs="2" key={i}>
            <MDBBtn
            className="stable-width"
            color='elegant'
              onClick={elem.func}
            >
              <h4 className="mb-0">{elem.name}</h4>
            </MDBBtn>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default Intro;
