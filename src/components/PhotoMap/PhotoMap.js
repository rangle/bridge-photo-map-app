import React, { Component, PropTypes } from 'react';
import Map, { Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_MAP_API_KEY } from '../../config/api';
import Image from '../Image/Image';

class PhotoMap extends Component {
  constructor() {
    super();
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker) {
    this.props.setSelectedPhotoID(props.id);
    this.props.setActiveMarker(marker);
    this.props.showInfoWindow(true);
  }

  onInfoWindowClose() {
    this.props.showInfoWindow(false);
    this.props.setActiveMarker({});
  }

  onMapClicked() {
    if (this.props.showingInfoWindow) {
      this.props.showInfoWindow(false);
      this.props.setActiveMarker({});
    }
  }

  getPhotoFromID(photos, id) {
    return (photos.length && id) ? photos.find( photo => photo.id === id ) : null;
  }

  getNamefromPhoto(photo) {
    return (photo && photo.name) ? photo.name : 'N/A';
  }

  render() {
    return (
      <Map
        style={{width: '80%', height: '50%', display: 'block', margin: '0 auto'}}
        google={this.props.google}
        initialCenter={{...this.props.coords}}
        centerAroundCurrentLocation
        zoom={5}
        onClick={this.onMapClicked}>
        { this.props.photos.map( (photo) => <Marker
          key={photo.id}
          id={photo.id}
          name={photo.name || 'N/A'}
          position={{lat: photo.latitude, lng: photo.longitude}}
          onClick={this.onMarkerClick} /> )
        }
        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h6>{this.getNamefromPhoto(this.getPhotoFromID(this.props.photos, this.props.selectedPhotoID))}</h6>
              <Image photo={this.getPhotoFromID(this.props.photos, this.props.selectedPhotoID)} size={1} />
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

PhotoMap.propTypes = {
  google: PropTypes.object,
  photos: PropTypes.array,
  setSelectedPhotoID: PropTypes.func,
  selectedPhotoID: PropTypes.number,
  showInfoWindow: PropTypes.func,
  showingInfoWindow: PropTypes.bool,
  setActiveMarker: PropTypes.func,
  activeMarker: PropTypes.object,
  coords: PropTypes.object,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(PhotoMap);
