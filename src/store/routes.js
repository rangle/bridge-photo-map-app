import React from 'react';
import { IndexRoute, Route } from 'react-router';

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ CounterPage }/>
    <Route path="about" component={ AboutPage }/>
  </Route>
);
