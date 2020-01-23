import React from 'react'
import { MDBCol, MDBRow, MDBBtn } from 'mdbreact'
import { songResponse, addToHistory } from "../redux/actions";
import {connect} from 'react-redux'

const Texter = ({songResponse, addToHistory}) => {
    const onSend = async (e) => {
        e.preventDefault();
        const {target} = e;
        console.log(target)
        const data = await fetch(`http://localhost:3000/api/search`, {
          method: "POST",
          body: e.target.elements[0].value
        }).then(e => e.json())
         console.log(data);
        songResponse(data);
        if(data) {
        addToHistory(data);
        }
      }
    return (<form onSubmit={onSend}>
        <MDBCol md={5} className="mx-auto">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
                </span>
            </div>
            <textarea className="form-control text-blacktheme" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>
        </MDBCol>
        <MDBRow>
        <MDBBtn type='sumbmit'
          className="stable-width mx-auto mt-3"
          color="elegant"
        ><h4 className="mb-0">Send</h4></MDBBtn>
        </MDBRow>
        </form>
    )
}
const mapDispatchToProps = {
    songResponse,
    addToHistory
  };
  
  export default connect(null, mapDispatchToProps)(Texter);
