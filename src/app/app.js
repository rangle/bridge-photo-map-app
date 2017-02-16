import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getPhotos } from '../actions/index.js';
import Image from '../components/image.js';

const mapStateToProps = state => ({
  photos: state.photos.list,
});

const mapDispatchToProps = {
  getPhotos,
};

class App extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  render() {
    return (
          <div className="container">
            <h3 className="center-align">Photo Map App</h3>
            <Image photos={this.props.photos}/>
          </div>
    );
  }
}

App.propTypes = {
  getPhotos: React.PropTypes.func,
  photos: React.PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
