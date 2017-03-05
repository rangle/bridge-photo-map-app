import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import {
  getPhotos as gp,
  setSelectedPhotoID as sspid,
  showInfoWindow as siw,
  setActiveMarker as sam,
} from '../../actions/index';

import PhotoGallery from '../PhotoGallery/PhotoGallery';
import PhotoMap from '../PhotoMap/PhotoMap';
import Header from '../Header/Header';
import SearchForm from '../Forms/SearchForm';

class App extends Component {
  componentDidMount() {
    const { getPhotos } = this.props;
    getPhotos({
      feature: 'popular',
      image_size: [1, 200],
      tags: 1,
    });
  }

  render() {
    const {
      getPhotos,
      setSelectedPhotoID,
      showInfoWindow,
      setActiveMarker,
      photos,
      selectedPhotoID,
      showingInfoWindow,
      activeMarker,
      coords,
      searchForm,
    } = this.props;

    const handleSearchSubmit = e => {
      e.preventDefault();
      return getPhotos({
        term: searchForm.values.searchKeyword,
        image_size: [1, 200],
      }, '/search');
    };

    return (
      <div>
        <Header/>
        <main>
          <SearchForm onSubmit={ handleSearchSubmit } />
          { searchForm && searchForm.values && <h4>{`#${searchForm.values.searchKeyword}`}</h4> }
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
  coords: T.object,
  searchForm: T.object,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
  selectedPhotoID: state.photos.selectedPhotoID,
  showingInfoWindow: state.photos.showingInfoWindow,
  activeMarker: state.photos.activeMarker,
  coords: state.photos.coords,
  searchForm: state.form.searchForm,
});

const mapDispatchToProps = {
  getPhotos: gp,
  setSelectedPhotoID: sspid,
  showInfoWindow: siw,
  setActiveMarker: sam,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
