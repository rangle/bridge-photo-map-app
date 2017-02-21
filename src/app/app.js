import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos, searchPhotos, handleInput } from '../actions/index';
import Image from '../components/image';

class PhotoGallery extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    const handleKeyword = (e) => this.props.handleInput(e.target.value);
    const handleSearch = () => this.props.searchPhotos({term: this.props.searchKeyword, image_size: 440});
    return (
          <div>
            <h3>Photo Map App</h3>
            <input onChange={handleKeyword} type="text"/>
            <button onClick={handleSearch} type="button">Search</button>
            <Image photos={this.props.photos}/>
          </div>
    );
  }
}

PhotoGallery.propTypes = {
  getPhotos: React.PropTypes.func.isRequired,
  photos: React.PropTypes.array.isRequired,
  handleInput: React.PropTypes.func.isRequired,
  searchKeyword: React.PropTypes.string.isRequired,
  searchPhotos: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
  searchKeyword: state.photos.searchkeyWord,
});

const mapDispatchToProps = {
  getPhotos,
  handleInput,
  searchPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
