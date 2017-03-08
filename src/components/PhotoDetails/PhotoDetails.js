import React, { Component, PropTypes as T } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

import { getPhotoDetails, getComments } from '../../actions/index';
import RelatedPhotoGallery from '../RelatedPhotoGallery/RelatedPhotoGallery';
import Header from '../Header/Header';
import CommentForm from '../Forms/CommentForm';

class PhotoDetails extends Component {
  componentDidMount() {
    this.props.getPhotoDetails(this.props.params.id);
    this.props.getComments(this.props.params.id);
  }

  componentWillReceiveProps(propUpdate) {
    if (this.props.params.id !== propUpdate.params.id) {
      this.props.getPhotoDetails(propUpdate.params.id);
    }
  }

  render() {
    const { photo, comments, commentForm } = this.props;
    const handlePostComment = e => {
      e.preventDefault();
      axios.post(`https://500pxserver-zuuynfmrvy.now.sh/api/photos/${this.props.params.id}/comments`, {
        text: commentForm.values.userComment,
        username: commentForm.values.username,
      })
      .then(() => {
        this.props.getComments(this.props.params.id);
      })
      .catch(error => {
        throw error;
      });
    };
    return (
      <div>
        <Header/>
        <div className="container">
          <p><Link to="/">Back</Link></p>
          <h2>{photo.name}</h2>
          <img className="z-depth-4" src={photo.image_url}/>
          <h5>Comments</h5>
          <span>{photo.votes_count} Votes</span>
          <CommentForm onSubmit={ handlePostComment } />
          {comments.length !== 0 ? comments.map((comment, index) => <p key={index}>{comment.text}</p>) : <p>No comments have been left for this photo. Be the first!</p>}
          <RelatedPhotoGallery tags={photo.tags} />
          <p><Link to="/">Back</Link></p>
        </div>
      </div>
    );
  }
}

PhotoDetails.propTypes = {
  photo: T.object,
  comments: T.array,
  params: T.object,
  id: T.number,
  getPhotoDetails: T.func.isRequired,
  commentForm: T.object,
  getComments: T.func.isRequired,
};

const mapStateToProps = state => ({
  photo: state.photos.photo,
  comments: state.photos.comments,
  commentForm: state.form.comment,
});

const mapDispatchToProps = {
  getPhotoDetails,
  getComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDetails);
