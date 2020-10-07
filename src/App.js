import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';

import Warehouse_Inventory from './containers/Warehouse_Inventory/Warehouse_Inventory';
import WarehouseDetail from './containers/Warehouse_Inventory/WarehouseDetail';
import Warehouse_Inventory_By_SKU from './containers/Warehouse_Inventory/Warehouse_Inventory_By_SKU';

import Expired_Warehouse_Inventory from './containers/Warehouse_Inventory/Filters_By_Inventory_Type/Expired_Warehouse_Inventory';
import Missing_Warehouse_Inventory from './containers/Warehouse_Inventory/Filters_By_Inventory_Type/Missing_Warehouse_Inventory';
import Damaged_Warehouse_Inventory from './containers/Warehouse_Inventory/Filters_By_Inventory_Type/Damaged_Warehouse_Inventory';
import Normal_Warehouse_Inventory from './containers/Warehouse_Inventory/Filters_By_Inventory_Type/Normal_Warehouse_Inventory';

import Bin_Inventory from './containers/Bin_Inventory/Bin_Inventory';
import BinDetail from './containers/Bin_Inventory/BinDetail';
import Bin_Inventory_By_SKU from './containers/Bin_Inventory/Bin_Inventory_By_SKU';

import Expired_Bin_Inventory from './containers/Bin_Inventory/Filters_By_Inventory_Type/Expired_Bin_Inventory';
import Missing_Bin_Inventory from './containers/Bin_Inventory/Filters_By_Inventory_Type/Missing_Bin_Inventory';
import Damaged_Bin_Inventory from './containers/Bin_Inventory/Filters_By_Inventory_Type/Damaged_Bin_Inventory';
import Normal_Bin_Inventory from './containers/Bin_Inventory/Filters_By_Inventory_Type/Normal_Bin_Inventory';

class App extends Component {

   render() {
      return (
         <div>
            <Navbar />
            <Switch>
              <Route path={'/warehouse_inventory_data' + "/:id"} component={Warehouse_Inventory_By_SKU}></Route>
              <Route path='/warehouse_inventory_data' component={Warehouse_Inventory}></Route>

              <Route path='/warehouse_expired_inventory_type' component={Expired_Warehouse_Inventory}></Route>
              <Route path='/warehouse_missing_inventory_type' component={Missing_Warehouse_Inventory}></Route>
              <Route path='/warehouse_damaged_inventory_type' component={Damaged_Warehouse_Inventory}></Route>
              <Route path='/warehouse_normal_inventory_type' component={Normal_Warehouse_Inventory}></Route>

              <Route path='/warehouse_detail' component={WarehouseDetail}></Route>

              <Route path={'/bin_inventory_data' + "/:id"} component={Bin_Inventory_By_SKU}></Route>
              <Route path='/bin_inventory_data' component={Bin_Inventory}></Route>

              <Route path='/bin_expired_inventory_type' component={Expired_Bin_Inventory}></Route>
              <Route path='/bin_missing_inventory_type' component={Missing_Bin_Inventory}></Route>
              <Route path='/bin_damaged_inventory_type' component={Damaged_Bin_Inventory}></Route>
              <Route path='/bin_normal_inventory_type' component={Normal_Bin_Inventory}></Route>

              <Route path='/bin_detail' component={BinDetail}></Route>
              
              <Route path='/home' component={HomePage}></Route>
              <Redirect from='/' to='/home' exact/>
              <Route render={() => <h1>Not Found</h1>}/>
            </Switch>
         </div>
      )
   }

}

export default App;
