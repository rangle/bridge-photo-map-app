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
import SearchForm from '../Forms/SearchForm';

class App extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    const { searchForm } = this.props;
    const handleSearchSubmit = e => {
      e.preventDefault();
      return this.props.searchPhotos(searchForm.values.searchHashtag);
    };

    return (
      <div>
        <Header/>
        <main>
          <SearchForm onSubmit={ handleSearchSubmit } />
          { searchForm && searchForm.values && <h4>{this.props.status && `#${searchForm.values.searchHashtag}`}</h4> }
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
  searchForm: T.object,
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
  searchForm: state.form.search,
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
