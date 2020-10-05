import React, { Component } from 'react';
import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './Bin_Inventory.css';
import Search from '../../components/Search/Search';


class Bin_Inventory extends Component {
  state = {
    serialized_data: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8080/wms/api/bin_inventory_data/');
      const bin_data = await res.json();
      this.setState({
        serialized_data: bin_data["data"]
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderTableData() {
      return this.state.serialized_data.map((item, index) => {
         return (
            <tr key={index}>
               <td>{item.batch_id}</td>
               <td>{item.warehouse}</td>
               <td>{item.sku}</td>
               <td>{item.bin}</td>
               <td>{item.inventory_type}</td>
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
         <div className="Bin_Inventory">
            <h3><span className="d-block p-2 font-weight-bold" style={{color: "red"}}>Bin Inventory</span></h3>
            <Search />
            <MDBTable borderless responsive hover>
               <MDBTableHead className="font-weight-bold" color="white-color bg-dark" textWhite>
                    <tr>
                        <th>Batch ID</th>
                        <th>Warehouse Name</th>
                        <th>SKU</th>
                        <th>Bin</th>
                        <th>Inventory Type</th>
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

export default Bin_Inventory;
