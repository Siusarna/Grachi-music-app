import React from "react";
import Guess from "./Guess"
import ChooseRecord from './ChooseRecord'
import {MDBBtn, MDBRow } from 'mdbreact'

const Switcher = ({data, games, round, end, received}) => {
  return (
    <div>
      {received ? (
        <Guess data={data} round={round}></Guess>
      ) : (
        <ChooseRecord></ChooseRecord>
      )}
      {games >= 3 ? (
        <MDBRow className="justify-content-center mt-4">
          <MDBBtn className="stable-width" onClick={end} color="elegant">
            <h4 className="mb-0">Show Results</h4>
          </MDBBtn>
        </MDBRow>
      ) : (
        ""
      )}
    </div>
  );
};

export default Switcher;
