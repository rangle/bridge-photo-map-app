import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getPhotos } from '../../actions/index';
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
        <PhotoMap />
      </main>
    );
  }
}

App.propTypes = {
  getPhotos: PropTypes.func.isRequired,
  photos: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
});

const mapDispatchToProps = {
  getPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
