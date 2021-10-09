import { useState, useEffect } from "react";
import { Route, Switch, useLocation } from "react-router";

import Dashboard from "./pages/dashboard/dashboard.component";
import MainSidebar from "./components/main-sidebar/main-sidebar.component";
import Header from "./components/header/header.component";
import Users from "./pages/users/users.component";
import Analytics from "./pages/analytics/analytics.component";
import SuppliersCategories from "./pages/suppliers-categories/suppliers-categories.component";
import SuppliersDining from "./pages/suppliers-dining/suppliers-dining.component";
import Requests from "./pages/requests/requests.component";
import RestaurantModule from "./pages/restaurant-module/restaurant-module.component.jsx";
import LifeStyleManagers from "./pages/lifestyle-managers/lifestyle-managers.component";
import Events from "./pages/events/events.component";
import EventsSushiMasterClass from "./pages/events-sushi-masterclass/events-sushi-masterclass.component";
import SupplierRestaurant from "./pages/supplier-restaurant/supplier-restaurant.component";
import Connect from "./pages/connect/connect.component";
import ConnectCliveJackson from "./pages/connect-clive-jackson/connect-clive-jackson.component";
import PerksOrBenefits from "./pages/perks-or-benefits/perks-or-benefits.component";
import PerksOrBenefitsPersonalShopping from "./pages/perks-or-benefits-personal-shopping/perks-or-benefits-personal-shopping.component";
import GeoLocationMap from "./pages/geo-location-map/geo-location-map.component";
import GeoLocationMapRegion from "./pages/geo-location-map-region/geo-location-map-region.component";
import GeoLocationMapSubRegion from "./pages/geo-location-map-subregion/geo-location-map-subregion.component";
import Login from "./pages/login/login.component";
import ConnectForm from "./pages/new-connect-form/connect-form.component";
import RestaurantForm from "./pages/restaurant-form/restaurant-form.component";
import Report from "./pages/report/report.component";
// import EventCalendar from "./components/calendar-events/calendar-events.component";

import "./App.scss";

function App() {

  const location = useLocation()
  const [title, setTitle] = useState('Dashboard')

  useEffect(() => {
    
    if (location.pathname == '/'){
      setTitle('Dashboard')
    }
    else if (location.pathname == '/user'){
      setTitle('Users')
    }
    else if (location.pathname == '/analytics'){
      setTitle('Analytics')
    }
    else if (location.pathname == '/suppliers-categories'){
      setTitle('Suppliers')
    }
    else if (location.pathname == '/suppliers-dining'){
      setTitle('Suppliers')
    }
    else if (location.pathname == '/supplier-restaurant'){
      setTitle('Suppliers')
    }
    else if (location.pathname == '/requests'){
      setTitle('Requests')
    }
    else if (location.pathname == '/lifestyle-managers'){
      setTitle('Lifestyle Managers')
    }
    else if (location.pathname == '/events'){
      setTitle('Events')
    }
    else if (location.pathname == '/events-sushi-masterclass'){
      setTitle('Events')
    }
    else if (location.pathname == '/connect'){
      setTitle('Connect')
    }
    else if (location.pathname == '/connect-clive-jackson'){
      setTitle('Connect')
    }
    else if (location.pathname == '/perks-or-benefits'){
      setTitle('Perks/ Benefits')
    }
    else if (location.pathname == '/perks-or-benefits-personal-shopping'){
      setTitle('Perks/ Benefits')
    }
    else if (location.pathname == '/geo-location-map'){
      setTitle('Geo Location Map')
    }
    else if (location.pathname == '/geo-location-map-region'){
      setTitle('Geo Location Map')
    }
    else if (location.pathname == '/connect-form'){
      setTitle('Connect')
    }
    else if (location.pathname == '/restaurant-form'){
      setTitle('Restaurant')
    }
    else if (location.pathname == '/report'){
      setTitle('Reports')
    }

  }, [location.pathname])

  return (
    <div className="admin-panel">
      <div className="admin-panel__sidebar">
        <MainSidebar />
      </div>
      <div className="admin-panel__header">
        <Header title={title}/>
      </div>
      <div className="admin-panel__body">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/user" component={Users} />
          <Route path="/analytics" component={Analytics} />
          <Route path="/suppliers-categories" component={SuppliersCategories} />
          <Route path="/suppliers-dining" component={SuppliersDining} />
          <Route path="/supplier-restaurant" component={SupplierRestaurant} />
          <Route path="/requests" component={Requests} />
          <Route path="/lifestyle-managers" component={LifeStyleManagers} />
          <Route path="/events" component={Events} />
          <Route path="/events-sushi-masterclass" component={EventsSushiMasterClass} />
          <Route path="/connect" component={Connect} />
          <Route path="/connect-clive-jackson" component={ConnectCliveJackson} />
          <Route path="/perks-or-benefits" component={PerksOrBenefits} />
          <Route path="/perks-or-benefits-personal-shopping" component={PerksOrBenefitsPersonalShopping} />
          <Route path="/restaurant-module" component={RestaurantModule} />
          <Route path="/geo-location-map" component={GeoLocationMap} />
          <Route path="/geo-location-map-region" component={GeoLocationMapRegion} />
          <Route path="/geo-location-map-subregion" component={GeoLocationMapSubRegion}/>
          <Route path="/login" component={Login} />
          <Route path="/connect-form" component={ConnectForm} />
          <Route path="/restaurant-form" component={RestaurantForm} />
          <Route path="/report" component={Report} />
          {/* <Route path="/event-calendar" component={EventCalendar} /> */}
        </Switch>
      </div>
    </div>    
  );
}

export default App;
