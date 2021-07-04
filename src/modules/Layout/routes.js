import React from 'react';
import { Route, Switch } from 'react-router-dom';

import withLayout from '../Layout';
import Home from '../Home';
import Block from '../Block';
import Transaction from '../Transaction/components/single';

const Routes = () => (
  <Switch>
    {/* <Route
      exact
      path={'/'}
      key="home-page"
      render={(props) => {
        const Enriched = withLayout(Home);
        return <Enriched {...props} />;
      }}
    /> */}
    <Route
      exact
      path={'/'}
      key="block-page"
      render={(props) => {
        const Enriched = withLayout(Block);
        return <Enriched {...props} />;
      }}
    />
    <Route
      exact
      path={'/transaction/:transaction_hash'}
      key="single-transaction-page"
      render={(props) => {
        const Enriched = withLayout(Transaction);
        return <Enriched {...props} />;
      }}
    />
  </Switch>
);

export default Routes;
