import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './Bin_Inventory.css';

class BinDetail extends Component {
  state = {
    warehouse: []
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      this.state.warehouse.push(param[0])
    }
    console.log(this.state.warehouse)
  }
  render() {
    return <MDBTable stripped borderless hover responsive>
                <MDBTableHead className="font-weight-bold" color="white-color bg-dark" textWhite>
                    <tr>
                        <th><h4>Warehouse</h4></th>
                        <th><h4>{this.state.warehouse[1]}</h4></th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <td className="Data">Batch ID</td>
                        <td>{this.state.warehouse[0]}</td>
                    </tr>
                    <tr>
                        <td className="Data">SKU</td>
                        <td>{this.state.warehouse[2]}</td>
                    </tr>
                    <tr>
                        <td className="Data">Bin</td>
                        <td>{this.state.warehouse[3]}</td>
                    </tr>
                    <tr>
                        <td className="Data">Inventory Type</td>
                        <td>{this.state.warehouse[4]}</td>
                    </tr>
                    <tr>
                        <td className="Data">In Stock</td>
                        <td>{this.state.warehouse[5]}</td>
                    </tr>
                    <tr>
                        <td className="Data">Quantity</td>
                        <td>{this.state.warehouse[6]}</td>
                    </tr>
                    <tr>
                        <td className="Data">Created At</td>
                        <td>{this.state.warehouse[7]}</td>
                    </tr>
                    <tr>
                        <td className="Data">Modified At</td>
                        <td>{this.state.warehouse[8]}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
  }
}

export default withRouter(BinDetail);
