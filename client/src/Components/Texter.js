import React from "react";
import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import { songResponse, addToHistory } from "../redux/actions";
import { connect } from "react-redux";
import {pendingStatus} from '../redux/actions'

const Texter = ({ songResponse, addToHistory, pendingStatus, songs }) => {
  const onSend = async e => {
    e.preventDefault();
    pendingStatus();
    const button = e.target.lastChild.children[0];
    button.children[0].innerText = "Waiting";
    const obj = { data: e.target.elements[0].value };
    const data = await fetch(`http://localhost:3000/api/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj)
    }).then(e => e.json());
    songResponse(data);
    if (data) {
      addToHistory(data);
    }
  };
  return (
    <form onSubmit={onSend}>
      <MDBCol md={5} className="mx-auto">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fas fa-pencil-alt prefix"></i>
            </span>
          </div>
          <textarea
            className="form-control text-blacktheme"
            rows="5"
          ></textarea>
        </div>
      </MDBCol>
      <MDBRow>
        <MDBBtn
          type="submit"
          className="stable-width mx-auto mt-3"
          color="elegant"
          disabled={songs.pending ? true : false}
        >
          <h4 className="mb-0">Send</h4>
        </MDBBtn>
      </MDBRow>
    </form>
  );
};

const mapStateToProps = ({songs}) => ({
    songs
})

const mapDispatchToProps = {
  songResponse,
  addToHistory,
  pendingStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(Texter);
