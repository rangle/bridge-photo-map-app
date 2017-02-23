import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from '../components/App/App';
import PhotoDetails from '../components/PhotoGallery/PhotoDetails';

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }/>
    <Route path="/details/:id" component={PhotoDetails}/>
  </Router>
);
