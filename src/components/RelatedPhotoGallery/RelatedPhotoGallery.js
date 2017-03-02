import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';

import Images from '../Images/Images';

class RelatedPhotoGallery extends Component {
  render() {
    return (
      <div>
        <h5 className="center-align">Recommended For You</h5>
        <Images photos={this.props.relatedList} />
      </div>
    );
  }
}

RelatedPhotoGallery.propTypes = {
  tags: T.array,
  getRelatedPhotos: T.func.isRequired,
  photos: T.array,
  relatedList: T.array,
};

const mapStateToProps = state => ({
  relatedList: state.photos.relatedList,
});

export default connect(mapStateToProps)(RelatedPhotoGallery);
