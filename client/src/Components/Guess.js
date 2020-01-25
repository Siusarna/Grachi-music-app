import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle } from "mdbreact";
import { guessed, giveChance, finish, end, guessEnd } from "../redux/actions";
import { connect } from "react-redux";
const Guess = ({ data, guessed, giveChance, finish, end, guessEnd, round }) => {
  const Buttons = [
    { name: "Guessed!", func: guessed },
    { name: "Give a chance", func: giveChance },
    { name: "Finish game", func: finish }
  ];
  return (
    <>
      <MDBRow className="row d-flex justify-content-center text-center mt-10">
        <MDBCol>
          <h1>
            {data && !data.message && data.length !== 0 && Array.isArray(data)
              ? "Are there something familliar?"
              : "Sorry, nothing found"}
          </h1>
        </MDBCol>
      </MDBRow>
      {data && !data.message && Array.isArray(data)
        ? data.map((elem, i) => (
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
      <MDBRow className="justify-content-center mt-4">
        {data && !data.message && data.length !== 0 && Array.isArray(data)
          ? Buttons.map(elem => (
              <MDBBtn
              key={elem.name}
                className="stable-width"
                color="elegant"
                disabled={
                  elem.name === "Give a chance" && round >= 5 ? true : false
                }
                onClick={() => {
                  elem.func();
                  guessEnd();
                }}
              >
                <h4 className="mb-0">{elem.name}</h4>
              </MDBBtn>
            ))
          : Buttons.filter((elem, i) => i !== 0).map(elem => (
              <MDBBtn
              key={elem.name}
                className="stable-width"
                color="elegant"
                disabled={
                  elem.name === "Give a chance" && round >= 5 ? true : false
                }
                onClick={() => {
                  elem.func();
                  guessEnd();
                }}
              >
                <h4 className="mb-0">{elem.name}</h4>
              </MDBBtn>
            ))}
      </MDBRow>
    </>
  );
};

const mapDispatchToProps = {
  guessed,
  giveChance,
  finish,
  end,
  guessEnd
};

export default connect(null, mapDispatchToProps)(Guess);
