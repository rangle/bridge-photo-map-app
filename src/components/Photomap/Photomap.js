import React, { Component, PropTypes } from 'react';
import Map, { Marker, GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_MAP_API_KEY } from '../../config/api';

// TODO: A number of photos don't have lat/long location information – filter these out?
class Photomap extends Component {
  render() {
    const { google, photos } = this.props;
    return (
      <Map
        google={google}
        zoom={3}>
        { photos.map( (photo, index) => <Marker
          key={index}
          name={photo.name || 'N/A'}
          position={{lat: photo.latitude, lng: photo.longitude}} />) }
      </Map>
    );
  }
}

Photomap.propTypes = {
  google: PropTypes.object,
  photos: PropTypes.array,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(Photomap);
