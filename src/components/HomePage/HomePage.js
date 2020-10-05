import React from "react";
import { Link } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './HomePage.css';

const homePage = () => {
return (
    <div className="Home">
      <MDBTable hover responsive>
        <MDBTableHead>
          <tr>
            <th className="font-weight-bold" style={{fontSize: "20px"}}>
              <span className="d-block p-2 bg-dark text-white">WMS</span>
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr color="primary-color">
            <td className="font-weight-bold" color="red-text" style={{fontSize: "20px"}}>
              <Link to='/warehouse_inventory_data'>Warehouse Inventory</Link>
            </td>
          </tr>
          <tr>
            <td className="font-weight-bold" style={{fontSize: "20px"}}>
              <Link to='/bin_inventory_data'>Bin Inventory</Link>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
);
}

export default homePage;
