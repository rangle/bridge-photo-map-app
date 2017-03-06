import React, { Component, PropTypes as T } from 'react';
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
    const { setSelectedPhotoID, setActiveMarker, showInfoWindow } = this.props;
    setSelectedPhotoID(props.id);
    setActiveMarker(marker);
    showInfoWindow(true);
  }

  onInfoWindowClose() {
    const { setActiveMarker, showInfoWindow } = this.props;
    showInfoWindow(false);
    setActiveMarker({});
  }

  onMapClicked() {
    const { setActiveMarker, showInfoWindow } = this.props;
    if (showingInfoWindow) {
      showInfoWindow(false);
      setActiveMarker({});
    }
  }

  getPhotoFromID(photos, id) {
    return (photos.length && id) ? photos.find( photo => photo.id === id ) : null;
  }

  getNamefromPhoto(photo) {
    return (photo && photo.name) ? photo.name : 'N/A';
  }

  render() {
    const {
      google,
      coords,
      photos,
      activeMarker,
      showingInfoWindow,
      selectedPhotoID,
      zoom,
      loaded,
    } = this.props;

    if (!loaded) {
      return <p>Loading...</p>;
    }

    return (
      <Map
        style={{width: '70%', left: '-30vw', height: '75%', display: 'block', margin: '0 auto'}}
        google={google}
        center={{...coords}}
        centerAroundCurrentLocation
        zoom={zoom}
        onClick={this.onMapClicked}>
        { photos.map( (photo) => <Marker
          key={photo.id}
          id={photo.id}
          name={photo.name || 'N/A'}
          position={{lat: photo.latitude, lng: photo.longitude}}
          onClick={this.onMarkerClick} /> )
        }
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={this.onInfoWindowClose}>
            <div>
              <h6>{this.getNamefromPhoto(this.getPhotoFromID(photos, selectedPhotoID))}</h6>
              <Image photo={this.getPhotoFromID(photos, selectedPhotoID)} size={1} />
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

PhotoMap.propTypes = {
  google: T.object,
  photos: T.array,
  setSelectedPhotoID: T.func.isRequired,
  selectedPhotoID: T.number,
  showInfoWindow: T.func.isRequired,
  showingInfoWindow: T.bool,
  setActiveMarker: T.func.isRequired,
  activeMarker: T.object,
  coords: T.object,
  zoom: T.number,
  center: T.object,
  loaded: T.bool,
};

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAP_API_KEY,
})(PhotoMap);
