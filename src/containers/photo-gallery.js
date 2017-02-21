import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos, searchPhotos, handleInput } from '../actions/index';
import Image from '../components/image';

class PhotoGallery extends Component {
  // This is temporary. Just to have pictures on load. Eventually, I'd imagine search results gets a separate route from home.
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    const handleKeyword = (e) => this.props.handleInput(e.target.value);
    const handleSearch = () => this.props.searchPhotos(this.props.search);
    return (
          <div>
            <h3>Photo Map App</h3>
            <input onChange={handleKeyword} type="text"/>
            <button onClick={handleSearch} type="button">Search</button>
            <h4>{this.props.status === true ? `#${this.props.search}` : ''}</h4>
            <Image photos={this.props.photos}/>
          </div>
    );
  }
}

PhotoGallery.propTypes = {
  getPhotos: React.PropTypes.func,
  photos: React.PropTypes.array.isRequired,
  handleInput: React.PropTypes.func,
  search: React.PropTypes.string.isRequired,
  status: React.PropTypes.bool,
  searchPhotos: React.PropTypes.func,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
  search: state.photos.search,
  status: state.photos.status,
});

const mapDispatchToProps = {
  getPhotos,
  handleInput,
  searchPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);