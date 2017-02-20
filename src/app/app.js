import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPhotos, searchPhotos } from '../actions/index';
import Image from '../components/image';

class PhotoGallery extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    const handleInput = (e) => console.log(e.target.value);
    const handleSearch = () => this.props.searchPhotos();
    return (
          <div>
            <h3>Photo Map App</h3>
            <input onChange={handleInput} type="text"/>
            <button onClick={handleSearch} type="button">Search</button>
            <Image photos={this.props.photos}/>
          </div>
    );
  }
}

PhotoGallery.propTypes = {
  getPhotos: React.PropTypes.func.isRequired,
  photos: React.PropTypes.array.isRequired,
  searchPhotos: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photos: state.photos.list,
});

const mapDispatchToProps = {
  getPhotos,
  searchPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
