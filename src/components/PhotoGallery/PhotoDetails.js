import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { get } from '../../api/request';

export default class PhotoDetails extends Component {
  constructor() {
    super();
    this.state = {
      photo: '',
      comments: [],
    };
  }

  componentDidMount() {
    get(`/photos/${this.props.params.id}`, {image_size: 4, comments: 1})
    .then(response => {
      console.log(response);
      console.log(response.photo.comments_count);
      this.setState({
        photo: response.photo,
        comments: response.comments,
      });
    });
  }
  render() {
    return (
      <div className="container">
        <h2>{this.state.photo.name}</h2>
          <img className="z-depth-4" src={this.state.photo.image_url}/>
        <h5>Comments</h5>
          <span>{this.state.photo.votes_count} Votes</span>
          {this.state.comments.length !== 0 ? this.state.comments.map((comment, index) => {
            return <p key={index}>{comment.body}</p>;
          }) : <p>No comments have been left for this photo. Be the first!</p>}
        <p><Link to="/">Back</Link></p>
      </div>
    );
  }
}

PhotoDetails.propTypes = {
  photo: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.number,
};
