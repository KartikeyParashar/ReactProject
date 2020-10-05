import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { Router } from 'react-router-dom';

import Logo from '../Logo/Logo';
import './Navbar.css';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div className="Nav">
      <MDBNavbar color="red" dark expand="md" style={{height: "50px"}}>
        <MDBNavbarBrand>
          <strong className="white-text"><Logo /></strong>
        </MDBNavbarBrand>
        <MDBNavbarBrand>
          <strong className="white-text">GramFactory</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink active to="/home" className="font-weight-bold">Home</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }
}

export default NavbarPage;
