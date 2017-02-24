import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getPhotoDetails } from '../../actions/index';

class PhotoDetails extends Component {
  componentDidMount() {
    this.props.getPhotoDetails(this.props.params.id);
  }
  render() {
    const { photo, comments } = this.props;
    return (
      <div className="container">
        <h2>{photo.name}</h2>
          <img className="z-depth-4" src={photo.image_url}/>
        <h5>Comments</h5>
          <span>{photo.votes_count} Votes</span>
          {comments.length !== 0 ? comments.map((comment, index) => {
            return <p key={index}>{comment.body}</p>;
          }) : <p>No comments have been left for this photo. Be the first!</p>}
        <p><Link to="/">Back</Link></p>
      </div>
    );
  }
}

PhotoDetails.propTypes = {
  photo: PropTypes.object,
  comments: PropTypes.array,
  params: PropTypes.object,
  id: PropTypes.number,
  getPhotoDetails: PropTypes.func,
};

const mapStateToProps = state => ({
  photo: state.photos.photo,
  comments: state.photos.comments,
});

const mapDispatchToProps = {
  getPhotoDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetails);
