import React from "react";
import { connect } from "react-redux";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle } from "mdbreact";
import {startOver} from '../redux/actions'

const Results = ({ songHistory, player, server, startOver }) => {
  songHistory = songHistory.flat();
  return (
    <div>
      <MDBRow className="row d-flex justify-content-center text-center mt-10">
        <MDBCol>
          <h1>
            {player === server
              ? `Oh, it's a draw!`
              : player > server
              ? "Congratulations!"
              : "Oh sorry, looks like our server is lucky enough"}{" "}
          </h1>
        </MDBCol>
      </MDBRow>
      <MDBRow className="row d-flex justify-content-center text-center mt-2">
        <MDBCol>
          <h2>
            {songHistory.length !== 0 ? 'Here is your song history:' : 'But you got this far without server guesses?'}
          </h2>
        </MDBCol>
      </MDBRow>
      {songHistory
        ? songHistory.map((elem, i) => (
          <MDBRow className="d-flex justify-content-center" key={i}>
            <MDBCol lg={'5'} className="mt-3">
            <MDBCard
              className="text-center"
            >
              <MDBCardHeader className="card-header-black">
                {" "}
                <h5>
                  {elem.artist} - {elem.title}
                </h5>
              </MDBCardHeader>
              <MDBCardBody className="card-body-black">
              {elem.preview ? (
                  <audio id="player" className='audio-width'controls>
                    <source src={elem.preview} type="audio/mp3" />
                  </audio>
                ) : (
                  <MDBCardTitle><h4 className="mb-0">Sorry, no preview for this one</h4></MDBCardTitle>
                )}
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>
          ))
        : ""}
      <MDBRow className="justify-content-center mt-4 mb-4">
        <MDBBtn className="stable-width" onClick={startOver} color="elegant">
          <h4 className="mb-0">To Main Menu</h4>
        </MDBBtn>
      </MDBRow>
    </div>
  );
};

const mapStateToProps = ({ songHistory }) => ({
  songHistory
});

const mapDisaptchToProps = {
    startOver
}

export default connect(mapStateToProps, mapDisaptchToProps)(Results);
