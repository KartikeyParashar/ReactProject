import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { MDBCol, MDBRow, MDBView, MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

import './Warehouse_Inventory.css';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';


class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 50,
      currentPage: 0,
      loading: true,
      filtered_data: []
    };
    this.handlePageClick = this
            .handlePageClick
            .bind(this);
  }

  warehouseDetailHandler = (item) => {
    const queryParams = []
    const data = Object.values(item);
    queryParams.push(data[0].warehouse);
    queryParams.push(data[0].sku);
    queryParams.push(data[0].inventory_type);
    queryParams.push(data[0].inventory_state);
    queryParams.push(data[0].in_stock ? 'True' : 'False');
    queryParams.push(data[0].quantity);
    queryParams.push(data[0].created_at);
    queryParams.push(data[0].modified_at);
    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/warehouse_detail',
      search: '?' + queryString
    });
  }

  async receivedData() {
        const res = await fetch('http://127.0.0.1:8080/wms/api/warehouse_inventory_data/')
        const warehouse_data = await res.json();
        this.setState({filtered_data: warehouse_data["data"]})
        const data = warehouse_data["data"]
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const serialized_data = slice.map((item, index) => <React.Fragment>
                                                  <tr key={index}>
                                                     <td className="Warehouse" onClick={() => this.warehouseDetailHandler({item})}>{item.warehouse}</td>
                                                     <td className="Data">{item.sku}</td>
                                                     <td className="Data">{item.inventory_type}</td>
                                                     <td className="Data">{item.inventory_state}</td>
                                                     <td className="Data">{item.in_stock ? 'True' : 'False'}</td>
                                                     <td className="Data">{item.quantity}</td>
                                                     <td className="Data">{item.created_at}</td>
                                                     <td className="Data">{item.modified_at}</td>
                                                  </tr>
                                                </React.Fragment>)

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            serialized_data,
            loading: false
        })
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    };

    componentDidMount() {
        this.receivedData()
        this.state.filtered_data.map((item, index) => console.log("Hey"))
    }

    inventoryTypeHandler = (event) => {
      if (event.target.value==="expired") {
        this.props.history.push('/warehouse_expired_inventory_type');
      }
      if (event.target.value==="missing") {
        this.props.history.push('/warehouse_missing_inventory_type');
      }
      if (event.target.value==="damaged") {
        this.props.history.push('/warehouse_damaged_inventory_type');
      }
      if (event.target.value==="normal") {
        this.props.history.push('/warehouse_normal_inventory_type');
      }
    }



  render() {
    let table = null;
    if (this.state.loading) {
      table = <Spinner />;
    } else {
      table = <div>
                  <h3><span className="d-block p-2 font-weight-bold" style={{color: "red"}}>Warehouse Inventory</span></h3>
                  <Search />
                  <MDBRow>
                    <MDBCol sm="10">
                      <MDBTable borderless responsive hover>
                        <MDBTableHead className="Data" color="white-color bg-dark" textWhite>
                            <tr>
                                <th>Warehouse Name</th>
                                <th>SKU</th>
                                <th>Inventory Type</th>
                                <th>Inventory State</th>
                                <th>In Stock</th>
                                <th>Quantity</th>
                                <th>Created at</th>
                                <th>Modified at</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {this.state.serialized_data}
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCol>
                    <MDBCol sm="2">
                        <select onChange={this.inventoryTypeHandler}
                          style={{backgroundColor: "#bff2f5", 
                          color: "black", fontWeight:"bold"}} 
                          className="browser-default custom-select" >
                            <option>By Inventory Type</option>
                            <option style={{fontWeight: "bold"}} value="expired" >expired</option>
                            <option style={{fontWeight: "bold"}} value="normal">normal</option>
                            <option style={{fontWeight: "bold"}} value="missing">missing</option>
                            <option style={{fontWeight: "bold"}} value="damaged">damaged</option>
                        </select>
                        <select onChange={this.expiredInventoryHandler}
                          style={{backgroundColor: "#bff2f5", color: "black", fontWeight:"bold", 
                          marginTop: "100px"}} className="browser-default custom-select" >
                            <option>By Inventory State</option>
                            <option style={{fontWeight: "bold"}} value="available" >available</option>
                            <option style={{fontWeight: "bold"}} value="picked">picked</option>
                            <option style={{fontWeight: "bold"}} value="reserved">reserved</option>
                            <option style={{fontWeight: "bold"}} value="ordered">ordered</option>
                        </select>
                    </MDBCol>
                  </MDBRow>
                  <ReactPaginate
                     previousLabel={"prev"}
                     nextLabel={"next"}
                     breakLabel={"..."}
                     breakClassName={"break-me"}
                     pageCount={this.state.pageCount}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={5}
                     onPageChange={this.handlePageClick}
                     containerClassName={"pagination"}
                     subContainerClassName={"pages pagination"}
                     activeClassName={"active"}/>
              </div>
    }
    return (<div className="Warehouse_Inventory">
                 {table}
            </div>)
  }
}

export default Inventory;
