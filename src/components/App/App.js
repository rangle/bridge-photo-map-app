import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPhotos, setSelectedPhotoID, showInfoWindow, setActiveMarker } from '../../actions/index';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PhotoMap from '../PhotoMap/PhotoMap';

class App extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
      <main>
        <h3>Photo Map App</h3>
        <PhotoGallery photos={this.props.photos} />
        <PhotoMap
          photos={this.props.photos}
          setSelectedPhotoID={this.props.setSelectedPhotoID}
          selectedPhotoID={this.props.selectedPhotoID}
          showInfoWindow={this.props.showInfoWindow}
          showingInfoWindow={this.props.showingInfoWindow}
          setActiveMarker={this.props.setActiveMarker}
          activeMarker={this.props.activeMarker} />
      </main>
    );
  }
}

App.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  setSelectedPhotoID: PropTypes.func,
  selectedPhotoID: PropTypes.number,
  showInfoWindow: PropTypes.func,
  showingInfoWindow: PropTypes.bool,
  setActiveMarker: PropTypes.func,
  activeMarker: PropTypes.object,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
  selectedPhotoID: state.photos.selectedPhotoID,
  showingInfoWindow: state.photos.showingInfoWindow,
  activeMarker: state.photos.activeMarker,
});

const mapDispatchToProps = {
  getPhotos,
  setSelectedPhotoID,
  showInfoWindow,
  setActiveMarker,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
