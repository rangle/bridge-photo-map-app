import React, { Component, PropTypes as T } from 'react';
import Map, { Marker, GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_MAP_API_KEY } from '../../config/api';

class PhotoDetailsMap extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      google,
      photo,
      loaded,
    } = this.props;

    if (!loaded) {
      return <p>Loading...</p>;
    }

    return (
      <Map
        style={{width: '200px', height: '200px'}}
        google={google}
        zoom={15}
        center={{lat: photo.latitude, lng: photo.longitude}} >
        <Marker
          name={photo.name || 'N/A'}
          position={{lat: photo.latitude, lng: photo.longitude}} />
      </Map>
    );
  }
}

PhotoDetailsMap.propTypes = {
  google: T.object,
  photo: T.object,
  loaded: T.bool,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(PhotoDetailsMap);
