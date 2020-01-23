import React from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { guessed, giveChance, finish, end, guessEnd } from "../redux/actions";
import {connect} from 'react-redux';
const Guess = ({ data, guessed, giveChance, finish, end, guessEnd }) => {
  const arr = [
    {
      preview: `https://cdns-preview-1.dzcdn.net/stream/c-14c52420359ed8eb8f5257a8df72134a-3.mp3`,
      artist: "O.A.R.",
      title: "Miss You All The Time"
    }
  ];
  const Buttons = [{name:"Guessed!", func: guessed}, {name: "Give a chance", func: giveChance}, {name:"Finish game", func: finish}];
  console.log(data);
  return (
    <>
      <MDBRow className="row d-flex justify-content-center text-center mt-10">
        <MDBCol md>
          <h1>Are there something familliar?</h1>
        </MDBCol>
      </MDBRow>
      {arr.map(elem => (
        <div className="mt-3">
          <MDBRow className="d-flex justify-content-center">
            <h5>
              {elem.artist} - {elem.title}
            </h5>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <audio id="player" controls>
              <source src={data.preview} type="audio/mp3" />
            </audio>
          </MDBRow>
        </div>
      ))}
      <MDBRow className="justify-content-center mt-4">
        {Buttons.map(elem => (
          <MDBBtn className="stable-width" color="elegant" onClick={ () => {elem.func(); guessEnd()}}>
            <h4 className="mb-0">{elem.name}</h4>
          </MDBBtn>
        ))}
      </MDBRow>
    </>
  );
};

const mapDispatchToProps = {
    guessed, giveChance, finish, end, guessEnd
}

export default connect(null, mapDispatchToProps)(Guess);
