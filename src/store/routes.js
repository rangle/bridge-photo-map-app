import React from 'react';
import { Route } from 'react-router';
import App from '../components/App/App';
import PhotoGallery from '../containers/photo-gallery';

export default (
  <Route path="/" component={ PhotoGallery }/>
);
