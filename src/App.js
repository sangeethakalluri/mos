import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import VerticalMenu from 'molecules/vertical-menu';
import HorizontalNav from 'molecules/horizontal-nav';
import DashBoard from './pages/dashboard';
import ListingPage from './pages/plp';
import Variations from './pages/variations';
import Delivery from './pages/delivery';
import Payment from './pages/payment';
import Confirmation from './pages/confirmation';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <div className="container-scroller">
            <VerticalMenu />
            <div className="container-fluid page-body-wrapper">
              <HorizontalNav />
              <div className="main-panel">
              <Router>
                <Switch>
                  <Route path="/newOrder">
                    <ListingPage />
                  </Route>
                  <Route path="/variations">
                    <Variations />
                  </Route>
                  <Route path="/delivery">
                    <Delivery />
                  </Route>
                  <Route path="/payment">
                    <Payment />
                  </Route>
                  <Route path="/confirmation">
                    <Confirmation />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/">
                    <DashBoard />
                  </Route>
                </Switch>
              </Router>
          </div>

        </div>

      </div>

      </header>
    </div>
  );
}

export default App;
