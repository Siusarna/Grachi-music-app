import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ChooseRecord from "./ChooseRecord";
import { connect } from "react-redux";
import Guess from "./Guess";

const Game = ({ songs, game }) => {
  console.log(game);
  const { player, server, games, round } = game;
  const { data, received } = songs;
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
              <td className="h3-responsive">{player}</td>
              <td className="h3-responsive">{server}</td>
            </tr>
          </table>
        </MDBCol>
      </MDBRow>
      <MDBRow className="d-flex justify-content-center mt-8">
        <h2>
          Game {games}, Round {round}
        </h2>
      </MDBRow>
      {received ? <Guess data={data} round={round}></Guess> : <ChooseRecord></ChooseRecord>}
      {games >= 3 ? (
        <MDBRow className="justify-content-center mt-4">
          <MDBBtn className="stable-width" color="elegant">
            <h4 className="mb-0">Show Results</h4>
          </MDBBtn>
        </MDBRow>
      ) : (
        ""
      )}
    </MDBContainer>
  );
};

const mapStateToProps = ({ songs, game }) => ({
  songs,
  game
});

export default connect(mapStateToProps)(Game);
