import React, { Component } from "react";
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";

import { withRouter } from 'react-router-dom';

class Search extends Component {
  state = {
    sku: ''
  }

  addSKUHandler = () => {
    this.props.history.push(this.props.match.url + '/' + this.state.sku);
  }

  render () {
    return (
      <MDBCol md="6">
        <div className="input-group md-form form-sm form-1 pl-0">
          <div className="input-group-prepend">
            <span className="input-group-text purple lighten-3" id="basic-text1">
              <MDBIcon className="text-white" icon="search" />
            </span>
          </div>
          <input className="form-control my-0 py-1"
                 type="text" placeholder="Search By SKU"
                 aria-label="Search"
                 value={this.state.sku}
                 onChange={(event) => this.setState({sku: event.target.value})}/>
          <div className="text-center">
            <MDBBtn color="primary" onClick={this.addSKUHandler}>Search</MDBBtn>
          </div>
        </div>
      </MDBCol>
    );
  }
}



export default withRouter(Search);
