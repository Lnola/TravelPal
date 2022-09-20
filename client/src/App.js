import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import Register from "./components/Register/Register";
import Trips from "./components/Trips";
import Locations from "./components/Locations";
import LocationDetails from "./components/LocationDetails";
import TripDetails from "./components/TripDetails";
import "./components/Common.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/register" component={Register} />
        <PrivateRoute exact path="/trips" component={Trips} />
        <PrivateRoute exact path="/trips/details" component={TripDetails} />
        <PrivateRoute exact path="/locations" component={Locations} />
        <PrivateRoute
          exact
          path="/locations/details"
          component={LocationDetails}
        />
        <Redirect exact to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
