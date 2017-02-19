import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_MAP_API_KEY } from '../../config/api';

class Photomap extends Component {
  render() {
    return (
      <Map google={window.google} />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(Photomap);
