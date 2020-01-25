import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { connect } from "react-redux";
import {end} from "../redux/actions"
import Switcher from "./Switcher";
import Results from "./Results";

const Game = ({ songs, game, end }) => {
  const { player, server, games, round, results } = game;
  const { data, received } = songs;
  return (
    <MDBContainer className="app-color">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol sm={'5'} className="d-flex counter">
          <table className="full-width text-center">
            <thead>
            <tr>
              <th className="h3-responsive th-sm">You</th>
              <th className="h3-responsive th-sm">Server</th>
            </tr>
            </thead><tbody>
            <tr>
              <td className="h3-responsive">{player}</td>
              <td className="h3-responsive">{server}</td>
            </tr>
            </tbody>
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
