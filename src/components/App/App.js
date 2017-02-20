import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPhotos, setselectedPhotoID } from '../../actions/index';
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
          setselectedPhotoID={this.props.setselectedPhotoID}
          selectedPhotoID={this.props.selectedPhotoID} />
      </main>
    );
  }
}

App.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
  selectedPhotoID: PropTypes.number,
  setselectedPhotoID: PropTypes.func,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
  selectedPhotoID: state.photos.selectedPhotoID,
});

const mapDispatchToProps = {
  getPhotos,
  setselectedPhotoID,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
