import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';

import {
  getPhotos,
  setSelectedPhotoID,
  showInfoWindow,
  setActiveMarker,
  searchPhotos,
  handleInput,
  getRelatedPhotos,
} from '../../actions/index';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PhotoMap from '../PhotoMap/PhotoMap';
import RelatedPhotoGallery from '../RelatedPhotoGallery/RelatedPhotoGallery';

class App extends Component {
  constructor() {
    super();
    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.getPhotos();
    this.props.getRelatedPhotos();
  }

  render() {
    return (
      <main>
        <h3>Photo Map App</h3>
        <input onChange={this.handleKeyword} type="text"/>
        <button onClick={this.handleSearch} className="btn waves-effect waves-light" type="button">Search</button>
        <h4>{this.props.status && `#${this.props.search}`}</h4>
        <PhotoGallery photos={this.props.photos} />
        <PhotoMap
          photos={this.props.photos}
          setSelectedPhotoID={this.props.setSelectedPhotoID}
          selectedPhotoID={this.props.selectedPhotoID}
          showInfoWindow={this.props.showInfoWindow}
          showingInfoWindow={this.props.showingInfoWindow}
          setActiveMarker={this.props.setActiveMarker}
          activeMarker={this.props.activeMarker}
          coords={this.props.coords} />
        <RelatedPhotoGallery photos={this.props.relatedPhotos} />
      </main>
    );
  }

  handleKeyword(e) {
    this.props.handleInput(e.target.value);
  }
  handleSearch() {
    this.props.searchPhotos(this.props.search);
  }
}

App.propTypes = {
  getPhotos: T.func.isRequired,
  photos: T.array.isRequired,
  setSelectedPhotoID: T.func,
  selectedPhotoID: T.number,
  showInfoWindow: T.func,
  showingInfoWindow: T.bool,
  setActiveMarker: T.func,
  activeMarker: T.object,
  handleInput: T.func,
  search: T.string.isRequired,
  status: T.bool,
  searchPhotos: T.func,
  getRelatedPhotos: T.func,
  relatedPhotos: T.array,
  coords: T.object,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
  selectedPhotoID: state.photos.selectedPhotoID,
  showingInfoWindow: state.photos.showingInfoWindow,
  activeMarker: state.photos.activeMarker,
  search: state.photos.search,
  status: state.photos.status,
  relatedPhotos: state.photos.relatedList,
  coords: state.photos.coords,
});

const mapDispatchToProps = {
  getPhotos,
  setSelectedPhotoID,
  showInfoWindow,
  setActiveMarker,
  handleInput,
  searchPhotos,
  getRelatedPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
