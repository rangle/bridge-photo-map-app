import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';

import {
  getPhotos,
  setSelectedPhotoID,
  showInfoWindow,
  setActiveMarker,
  searchPhotos,
  handleInput,
} from '../../actions/index';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PhotoMap from '../PhotoMap/PhotoMap';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.handleKeyword = this.handleKeyword.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    return (
      <div>
        <Header/>
        <main>
          <form className="container">
            <input onChange={this.handleKeyword} type="text"/>
            <button onClick={this.handleSearch} className="btn waves-effect waves-light" type="button">Search</button>
            <h4>{this.props.status && `#${this.props.search}`}</h4>
          </form>
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
        </main>
      </div>
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
  setSelectedPhotoID: T.func.isRequired,
  selectedPhotoID: T.number,
  showInfoWindow: T.func.isRequired,
  showingInfoWindow: T.bool,
  setActiveMarker: T.func.isRequired,
  activeMarker: T.object,
  handleInput: T.func.isRequired,
  search: T.string.isRequired,
  status: T.bool,
  searchPhotos: T.func.isRequired,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
