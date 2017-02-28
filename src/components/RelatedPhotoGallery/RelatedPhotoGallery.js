import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import { getRelatedPhotos } from '../../actions/index';

class RelatedPhotoGallery extends Component {
  render() {
    return (
    <div>
      <h5>Recommended For You</h5>
    </div>
    );
  }
}

RelatedPhotoGallery.propTypes = {
  tags: T.array,
  relatedPhotos: T.func,
  getRelatedPhotos: T.func,
};

const mapStateToProps = state => ({
  relatedList: state.photos.relatedList,
});

const mapDispatchToProps = {
  getRelatedPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(RelatedPhotoGallery);
