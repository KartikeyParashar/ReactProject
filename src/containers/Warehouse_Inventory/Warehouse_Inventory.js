import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './Warehouse_Inventory.css';
import Search from '../../components/Search/Search';

class Warehouse_Inventory extends Component {
  state = {
    serialized_data: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8080/wms/api/warehouse_inventory_data/');
      const warehouse_data = await res.json();
      this.setState({
        serialized_data: warehouse_data["data"]
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderTableData() {
      return this.state.serialized_data.map((item, index) => {
         return (
            <tr key={index}>
               <td>{item.warehouse}</td>
               <td>{item.sku}</td>
               <td>{item.inventory_type}</td>
               <td>{item.inventory_state}</td>
               <td>{item.in_stock ? 'True' : 'False'}</td>
               <td>{item.quantity}</td>
               <td>{item.created_at}</td>
               <td>{item.modified_at}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div className="Warehouse_Inventory">
            <h3><span className="d-block p-2 font-weight-bold" style={{color: "red"}}>Warehouse Inventory</span></h3>
            <Search />
            <MDBTable borderless responsive hover>
               <MDBTableHead className="font-weight-bold" color="white-color bg-dark" textWhite>
                    <tr>
                        <th>Warehouse Name</th>
                        <th>SKU </th>
                        <th>Inventory Type</th>
                        <th>Inventory State</th>
                        <th>In Stock</th>
                        <th>Quantity</th>
                        <th>Created at</th>
                        <th>Modified at</th>
                    </tr>
               </MDBTableHead>
               <MDBTableBody>
                  {this.renderTableData()}
               </MDBTableBody>
            </MDBTable>
         </div>
      )
   }

}

export default Warehouse_Inventory;
