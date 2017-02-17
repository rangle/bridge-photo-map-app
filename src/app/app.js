import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos } from '../actions/index';
import Image from '../components/image';

class PhotoGallery extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
          <div className="container">
            <h3 className="center-align">Photo Map App</h3>
            <Image photos={this.props.photos}/>
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
