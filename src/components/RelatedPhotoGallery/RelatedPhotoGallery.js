import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';

import { getRelatedPhotos } from '../../actions/index';
import Images from '../Images/Images';

class RelatedPhotoGallery extends Component {
  render() {
    return (
    <div>
      <h5 className="center-align">Recommended For You</h5>
      <Images photos={this.props.photos}/>
    </div>
    );
  }
}

RelatedPhotoGallery.propTypes = {
  tags: T.array,
  relatedPhotos: T.func.isRequired,
  getRelatedPhotos: T.func.isRequired,
  photos: T.array,
};

const mapStateToProps = state => ({
  relatedList: state.photos.relatedList,
});

const mapDispatchToProps = {
  getRelatedPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedPhotoGallery);
