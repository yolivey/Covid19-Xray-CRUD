import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Constants
import { routes } from './constants';

// Styles
import { CssBaseline } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import { NavBar, Welcome } from './components';

// Pages
import { PatientInsert, Items, PatientUpdate } from './pages';

class App extends Component {
  render() {
    // TODO: maybe only need one route for Items?
    const publicViews = (
      <Switch>
        <Route exact path={routes.HOME}>
          <Redirect to={routes.PATIENTS} />
        </Route>
        <Route exact path={routes.PATIENT_UPDATE} component={PatientUpdate} />
        <Route exact path={routes.HOME} component={Welcome} />
        <Route exact path={routes.PATIENTS} component={Items} />
        <Route exact path={`${routes.PATIENTS}/items-plain`} component={Items} />
        <Route exact path={`${routes.PATIENTS}/react-table-v6`} component={Items} />
        <Route exact path={routes.PATIENT_INSERT} component={PatientInsert} />
      </Switch>
    );

    return (
      <BrowserRouter>
        <CssBaseline />
        <NavBar />
        <div className="app--main">
          <div className="view-container">{publicViews}</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
