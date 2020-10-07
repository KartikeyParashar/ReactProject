import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import '../Bin_Inventory.css';
import Spinner from '../../../components/Spinner/Spinner';


class Missing_Bin_Inventory extends Component {
  state = {
    serialized_data: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8080/wms/api/missing_bin_inventory_type/');
      const missing_bin_data = await res.json();
      this.setState({
        serialized_data: missing_bin_data["data"],
        loading: false
      });
    } catch (e) {
      console.log(e);
    }
  }

  binDetailHandler = (item) => {
    const queryParams = []
    const data = Object.values(item);
    queryParams.push(data[0].batch_id);
    queryParams.push(data[0].warehouse);
    queryParams.push(data[0].sku);
    queryParams.push(data[0].bin);
    queryParams.push(data[0].inventory_type);
    queryParams.push(data[0].in_stock ? 'True' : 'False');
    queryParams.push(data[0].quantity);
    queryParams.push(data[0].created_at);
    queryParams.push(data[0].modified_at);
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/bin_detail',
      search: '?' + queryString
    });
  }

  renderTableData() {
      return this.state.serialized_data.map((item, index) => {
         return (
            <tr key={index}>
               <td className="Bin" onClick={() => this.binDetailHandler({item})}>{item.batch_id}</td>
               <td className="Data">{item.warehouse}</td>
               <td className="Data">{item.sku}</td>
               <td className="Data">{item.bin}</td>
               <td className="Data">{item.inventory_type}</td>
               <td className="Data">{item.in_stock ? 'True' : 'False'}</td>
               <td className="Data">{item.quantity}</td>
               <td className="Data">{item.created_at}</td>
               <td className="Data">{item.modified_at}</td>
            </tr>
         )
      })
   }

   render() {

      let table = null;
      if (this.state.loading) {
        table = <Spinner />;
      } else {
        table = <MDBTable borderless responsive hover>
           <MDBTableHead className="Data" color="white-color bg-dark" textWhite>
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
      }

      return (
         <div className="Bin_Inventory">
            <h3><span className="d-block p-2 font-weight-bold" style={{color: "red"}}>Bin Inventory</span></h3>
            {table}
         </div>
      )
   }

}

export default withRouter(Missing_Bin_Inventory);
