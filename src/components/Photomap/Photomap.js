import React, { Component, PropTypes } from 'react';
import Map, { Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_MAP_API_KEY } from '../../config/api';

// TODO: A number of photos don't have lat/long location information – filter these out?
class PhotoMap extends Component {
  constructor() {
    super();
    this.initState = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.state = this.initState;
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker) {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
      selectedPlace: props,
    });
  }

  onInfoWindowClose() {
    this.setState({ ...this.initState });
  }

  onMapClicked() {
    if (this.state.showingInfoWindow) {
      this.setState({ ...this.initState });
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        style={{width: '100%', height: '50%', position: 'relative'}}
        zoom={3}>
        { this.props.photos.map( (photo, index) => <Marker
          key={index}
          name={photo.name || 'N/A'}
          position={{lat: photo.latitude, lng: photo.longitude}}
          onClick={this.onMarkerClick} /> )
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <p>{this.state.selectedPlace.name}</p>
        </InfoWindow>
      </Map>
    );
  }
}

PhotoMap.propTypes = {
  google: PropTypes.object,
  photos: PropTypes.array,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(PhotoMap);
