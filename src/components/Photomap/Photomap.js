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
    };
    this.state = this.initState;
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker) {
    this.setState({
      showingInfoWindow: true,
      activeMarker: marker,
    });
    this.props.setselectedPhotoID(props.id);
  }

  onInfoWindowClose() {
    this.setState({ ...this.initState });
  }

  onMapClicked() {
    if (this.state.showingInfoWindow) {
      this.setState({ ...this.initState });
    }
  }

  getPhotoFromID(photos, id) {
    return (photos.length && id) ? photos.find( photo => photo.id === id ) : { name: 'N/A' };
  }

  render() {
    return (
      <Map
        google={this.props.google}
        style={{width: '90%', height: '50%', display: 'block', margin: '0 auto'}}
        zoom={3}
        onClick={this.onMapClicked}>
        { this.props.photos.map( (photo) => <Marker
          key={photo.id}
          id={photo.id}
          name={photo.name || 'N/A'}
          position={{lat: photo.latitude, lng: photo.longitude}}
          onClick={this.onMarkerClick} /> )
        }
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <p>{this.getPhotoFromID(this.props.photos, this.props.selectedPhotoID).name}</p>
        </InfoWindow>
      </Map>
    );
  }
}

PhotoMap.propTypes = {
  google: PropTypes.object,
  photos: PropTypes.array,
  setselectedPhotoID: PropTypes.func,
  selectedPhotoID: PropTypes.number,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(PhotoMap);
