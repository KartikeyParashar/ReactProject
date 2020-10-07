import React, { Component } from 'react';
import { MDBCol, MDBRow, MDBBadge, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import ReactPaginate from 'react-paginate';

import './Bin_Inventory.css';
import Search from '../../components/Search/Search';
import Spinner from '../../components/Spinner/Spinner';


class Bin_Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 50,
      currentPage: 0,
      loading: true
    };
    this.handlePageClick = this
            .handlePageClick
            .bind(this);
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

  async receivedData() {
        const res = await fetch('http://127.0.0.1:8080/wms/api/bin_inventory_data/');
        const bin_data = await res.json();
        const data = bin_data["data"]
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const serialized_data = slice.map((item, index) => <React.Fragment>
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
    }

    inventoryTypeHandler = (event) => {
      if (event.target.value==="expired") {
        this.props.history.push('/bin_expired_inventory_type');
      }
      if (event.target.value==="missing") {
        this.props.history.push('/bin_missing_inventory_type');
      }
      if (event.target.value==="damaged") {
        this.props.history.push('/bin_damaged_inventory_type');
      }
      if (event.target.value==="normal") {
        this.props.history.push('/bin_normal_inventory_type');
      }
    }

   render() {

     let table = null;
     if (this.state.loading) {
       table = <Spinner />;
     } else {
       table = <div>
                   <h3><span className="d-block p-2 font-weight-bold" style={{color: "red"}}>Bin Inventory</span></h3>
                   <Search />
                   <MDBRow>
                     <MDBCol sm="10">
                      <MDBTable borderless responsive hover>
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

      return (
         <div className="Bin_Inventory">
            {table}
         </div>
      )
   }

}

export default Bin_Inventory;
