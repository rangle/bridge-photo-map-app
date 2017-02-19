import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos } from '../actions/index';
import Image from '../components/image';
import Photomap from '../Photomap/Photomap';

class PhotoGallery extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
          <div>
            <h3>Photo Map App</h3>
            <Image photos={this.props.photos}/>
            <Photomap />
          </div>
    );
  }
}

PhotoGallery.propTypes = {
  getPhotos: React.PropTypes.func.isRequired,
  photos: React.PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
});

const mapDispatchToProps = {
  getPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
