import React, { Component, Suspense } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Spinner from '../app/components/Spinner/Spinner';
import { routes } from './route-list/routes';

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
