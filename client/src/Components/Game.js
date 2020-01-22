import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import ChooseRecord from "./ChooseRecord";
import {connect} from 'react-redux'
import Guess from './Guess'


const Game = ({songs}) => {
  const {data, received} = songs;
  console.log(received);
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
  {received ? <Guess></Guess> : <ChooseRecord></ChooseRecord>} 
    </MDBContainer>
  );
};

const mapStateToProps = ({songs}) => ({
  songs
});


export default connect(mapStateToProps)(Game);
