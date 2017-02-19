import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos } from '../../actions/index';
import Images from '../Images/Images';

class PhotoGallery extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
          <div>
            <h3>Photo Map App</h3>
            <Images photos={this.props.photos}/>
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
