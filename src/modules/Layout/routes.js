import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Block from '../Block';
import Transaction from '../Transaction';

const Routes = () => (
  <Switch>
    {/* <Route exact path={'/home'} key="home-page" component={ } /> */}
    <Route exact path={'/block'} key="home-page" component={Block} />
    <Route exact path={'/transaction'} key="home-page" component={Transaction} />
  </Switch>
);

export default Routes;