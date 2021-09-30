import { useState } from 'react'
import { Route, Switch } from 'react-router'

import Dashboard from './pages/dashboard/dashboard.component'
import MainSidebar from './components/main-sidebar/main-sidebar.component'
import Header from './components/header/header.component'
import Users from './pages/users/users.component'
import Analytics from './pages/analytics/analytics.component'
import SuppliersCategories from './pages/suppliers-categories/suppliers-categories.component'
import SuppliersDining from './pages/suppliers-dining/suppliers-dining.component'
import Requests from './pages/requests/requests.component'
import RestaurantModule from "./pages/restaurant-module/restaurant-module.component";
import LifeStyleManagers from "./pages/lifestyle-managers/lifestyle-managers.component";
import Events from './pages/events/events.component';
import SupplierRestaurent from './pages/supplier-restaurent/supplier-restaurent.component'


import './App.scss'

function App() {
  return (
      <div className="admin-panel">
        <MainSidebar/>
        <div className="admin-panel__body">
            <Header/>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/user' component={Users}/>
              <Route path='/analytics' component={Analytics}/>
              <Route path='/suppliers-categories' component={SuppliersCategories}/>
              <Route path='/suppliers-dining' component={SuppliersDining}/>
              <Route path='/supplier-restaurent' component={SupplierRestaurent} />
              <Route path='/requests' component={Requests}/>
              <Route path='/restaurant' component={RestaurantModule}/>
              {/* <Route path='/restaurant' component={RestaurantModule}/> */}
              <Route path='/lifestyle-managers' component={LifeStyleManagers} />
              <Route path='/events' component={Events} />
            </Switch>
        </div>
      </div>
  )
}

export default App
