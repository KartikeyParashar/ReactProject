import React, { Component } from "react";
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import {Link} from 'react-router-dom';

class PaginationPage extends Component {

  render () {
    console.log(this.props)
    return (
      <MDBRow>
        <MDBCol>
          <MDBPagination className="mb-5">
            <MDBPageItem disabled>
              <MDBPageNav aria-label="Previous">
                <Link to={{pathname: '/warehouse_inventory_data', search: "?page=1"}}><span aria-hidden="true">Previous</span></Link>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem active>
              <MDBPageNav>
                1 <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>2</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav>3</MDBPageNav>
            </MDBPageItem>
            <MDBPageItem>
              <MDBPageNav aria-label="Previous">
                <Link to={{pathname: '/warehouse_inventory_data', search: "?page=1"}}><span aria-hidden="true">Next</span></Link>
              </MDBPageNav>
            </MDBPageItem>
          </MDBPagination>
        </MDBCol>
      </MDBRow>)
  }
}


export default PaginationPage;
