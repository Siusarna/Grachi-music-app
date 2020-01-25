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
import { start } from "../redux/actions";
import { connect } from "react-redux";

const Intro = ({ start }) => {
  const [isStarter, setPage] = useState(true);
  const showInstructions = () => {
    setPage(!isStarter);
  };
  const startGame = () => {
    start(true);
  };
  const Buttons = [
    { name: isStarter ? "Instructions" : "Start Page", func: showInstructions },
    { name: "Start", func: startGame }
  ];
  return (
    <MDBContainer className="d-flex flex-column">
      <div className='d-flex flex-column my-auto mt-2'>
      <MDBRow className="justify-content-center mx-0">
        <MDBCol xl='10'>
        <MDBCard
          className={`${isStarter ? "animate-main" : ""} to-normal-size`}
        >
          <MDBCardTitle>
            <h2 className="h2-responsive text-center font-weight-normal pt-4 pr-2 pl-2">
              {isStarter ? `Welcome to Music-Akinator App!` : `Instructions`}
            </h2>
          </MDBCardTitle>
          <MDBCardBody className="pt-1">
            
              {isStarter
                ? <h3 className="text-center h3-responsive">This is gaming app, which allows you to challenge our mighty server
            in song recognition. Feel free to read instructions before starting
            the game.</h3>
                : <><p>1. You are free to enter your song by: Humming, Actual Song and Lyrics.</p>
                <p>2. For Humming and Song you will be provided by our special recorder and for Lyrics there will be a text editor.</p>
                <p>3. After sending request by pressing "Finish" or "Send" you will be provided with a list of results.</p>
                <p>4. You will be provided by 3 buttons:</p>
                  <p>"Guessed!" - means that there is a song you were searching for. Server will get the point.</p>
                  <p>"Give a chance" - means that you want to play one more round, giving a chance to our server to recognize the song
                  </p>
                  <p>"Finish game" - server could not find the needed one. You will get the point.</p>
                  <p>5. There is games and rounds system.</p><p> It means that you are providing different pieces of song in different rounds and diffrerent songs in different games.(Max amount of rounds - 5)</p>
                  <p>After 2 games, you will be availiable to see the results of you challenging our server, provided with the history of songs</p>
                  <h4 className="text-center">Have fun!</h4></>}
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow className="justify-content-center mt-3">
        {Buttons.map((elem, i) => (
          <MDBCol xs="2" key={i}>
            <MDBBtn
              className="stable-width"
              color="elegant"
              onClick={elem.func}
            >
              <h4 className="mb-0">{elem.name}</h4>
            </MDBBtn>
          </MDBCol>
        ))}
      </MDBRow>
      </div>
    </MDBContainer>
  );
};

const mapDispatchToProps = {
  start
};

export default connect(null, mapDispatchToProps)(Intro);
