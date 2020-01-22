import React from 'react'
import { MDBCol, MDBRow, MDBBtn } from 'mdbreact'

const Texter = () => {
    return (<>
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
        <MDBBtn
          className="stable-width mx-auto mt-3"
          color="elegant"
        ><h4>Send</h4></MDBBtn>
        </MDBRow>
        </>
    )
}

export default Texter
