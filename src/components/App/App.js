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
    const {
      getPhotos,
    } = this.props;

    const params = {
      feature: 'popular',
      image_size: [1, 200],
      tags: 1,
    };
    getPhotos(params);
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
      searchGeocodedLocation,
    } = this.props;

    const buildQueryParams = (imgSize = [1, 200]) => {
      const term = (searchForm.values && searchForm.values.searchKeyword) ? searchForm.values.searchKeyword : null;
      const geo = (searchForm.values && searchForm.values.within5km) ? `${coords.lat},${coords.lng},5km` : null;
      return {
        image_size: imgSize,
        ...term && { term },
        ...geo && { geo },
      };
    };

    const handleSearchSubmit = e => {
      e.preventDefault();
      const location = (searchForm.values && searchForm.values.searchLocation) ? searchForm.values.searchLocation : null;
      location ? searchGeocodedLocation(location, buildQueryParams(), 'search') : getPhotos(buildQueryParams(), 'search');
    };

    return (
      <div>
        <Header/>
        <main className="container">
         { searchForm && searchForm.values && searchForm.values.searchKeyword && <h4>{`#${searchForm.values.searchKeyword}`}</h4> }
          <SearchForm onSubmit={ handleSearchSubmit } />
          <PhotoGallery photos={photos} />
          <PhotoMap
            photos={photos}
            setSelectedPhotoID={setSelectedPhotoID}
            selectedPhotoID={selectedPhotoID}
            showInfoWindow={showInfoWindow}
            showingInfoWindow={showingInfoWindow}
            setActiveMarker={setActiveMarker}
            activeMarker={activeMarker}
            coords={coords}
            zoom={(searchForm && searchForm.values && searchForm.values.within5km) ? 12 : 5} />
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
  zoom: T.number,
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
