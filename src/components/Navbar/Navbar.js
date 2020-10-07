import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

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
    <MDBNavbar color="red accent-2" light expand="md">
      <MDBNavbarBrand>
        <strong className="white-text"><Logo /></strong>
      </MDBNavbarBrand>
      <MDBNavbarBrand>
        <strong className="white-text">GramFactory</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav center>
          <MDBNavItem>
            <MDBNavLink hover to="/home" className="font-weight-bold" style={{color: '#092709'}}>Home</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink hover to="/logout" className="font-weight-bold" style={{color: '#092709'}}>Logout</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  </div>
    );
  }
}

export default NavbarPage;
