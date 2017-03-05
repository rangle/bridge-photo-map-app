import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import {
  getPhotos as gp,
  setSelectedPhotoID as sspid,
  showInfoWindow as siw,
  setActiveMarker as sam,
  searchPhotos as sp,
} from '../../actions/index';

import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PhotoMap from '../PhotoMap/PhotoMap';
import Header from '../Header/Header';
import SearchForm from '../Forms/SearchForm';

class App extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos({feature: 'popular', image_size: [1, 200], tags: 1});
  }

  render() {
    const {
      setSelectedPhotoID,
      showInfoWindow,
      setActiveMarker,
      searchPhotos,
      photos,
      selectedPhotoID,
      showingInfoWindow,
      activeMarker,
      status,
      coords,
      searchForm,
    } = this.props;

    const handleSearchSubmit = e => {
      e.preventDefault();
      return searchPhotos(searchForm.values.searchKeyword);
    };

    return (
      <div>
        <Header/>
        <main>
          <SearchForm onSubmit={ handleSearchSubmit } />
          { searchForm && searchForm.values && <h4>{status && `#${searchForm.values.searchKeyword}`}</h4> }
          <PhotoGallery photos={photos} />
          <PhotoMap
            photos={photos}
            setSelectedPhotoID={setSelectedPhotoID}
            selectedPhotoID={selectedPhotoID}
            showInfoWindow={showInfoWindow}
            showingInfoWindow={showingInfoWindow}
            setActiveMarker={setActiveMarker}
            activeMarker={activeMarker}
            coords={coords} />
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
  status: state.photos.status,
  coords: state.photos.coords,
  searchForm: state.form.searchForm,
});

const mapDispatchToProps = {
  getPhotos: gp,
  setSelectedPhotoID: sspid,
  showInfoWindow: siw,
  setActiveMarker: sam,
  searchPhotos: sp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
