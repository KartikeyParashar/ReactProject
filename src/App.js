import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Warehouse_Inventory from './containers/Warehouse_Inventory/Warehouse_Inventory';
import Warehouse_Inventory_By_SKU from './containers/Warehouse_Inventory/Warehouse_Inventory_By_SKU';
import Bin_Inventory from './containers/Bin_Inventory/Bin_Inventory';
import Bin_Inventory_By_SKU from './containers/Bin_Inventory/Bin_Inventory_By_SKU';

class App extends Component {

   render() {
      return (
         <div>
            <Navbar />
            <Switch>
              <Route path={'/warehouse_inventory_data' + "/:id"} component={Warehouse_Inventory_By_SKU}></Route>
              <Route path='/warehouse_inventory_data' component={Warehouse_Inventory}></Route>
              <Route path={'/bin_inventory_data' + "/:id"} component={Bin_Inventory_By_SKU}></Route>
              <Route path='/bin_inventory_data' component={Bin_Inventory}></Route>
              <Route path='/home' component={HomePage}></Route>
              <Redirect from='/' to='/home' exact/>
              <Route render={() => <h1>Not Found</h1>}/>
            </Switch>


         </div>
      )
   }

}

export default App;
