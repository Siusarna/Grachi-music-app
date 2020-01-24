import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ChooseRecord from "./ChooseRecord";
import { connect } from "react-redux";
import Guess from "./Guess";
import {end} from "../redux/actions"
import Switcher from "./Switcher";
import Results from "./Results";

const Game = ({ songs, game, end }) => {
  console.log(game);
  const { player, server, games, round, results } = game;
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
      {results ? <Results player={player} server={server} /> : <Switcher data={data} round={round} games={games} received={received} end={end}></Switcher>}
    </MDBContainer>
  );
};

const mapStateToProps = ({ songs, game }) => ({
  songs,
  game
});

const mapDispatchToProps = {
  end
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
