import React, {Component} from 'react';
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import {Login} from "./pages/Login";
import {RegisterCompany} from "./pages/company/RegisterCompany";
import {ViewListings} from "./pages/company/ViewListings";
import {PickupList} from "./pages/staff/PickupList";
import {LandingPages} from "./pages/LandingPages";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthTokens";

import { setCurrentUser, logoutUser } from "./action/authActions";
import { Provider } from "react-redux";
import store from "./store";

// Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
//   console.log("test");
// }

class  App extends Component{

  render(){
  return (
    <Provider store={store} >
      <Router>
        <div className="App">
          {/* <NavigationBar /> */}
          <Route exact path="/" component={LandingPages} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/registercompany" component={RegisterCompany} />
          <Route exact path="/viewlistings" component={ViewListings} />
          <Route exact path="/pickuplist" component={PickupList} />
      </div>
      </Router>
    </Provider>
  );
  }
}

export default App;

const Wrapper = styled.div`
  border: 2px solid black;
`;

const Title = styled.h1`
  color:red;
`;
