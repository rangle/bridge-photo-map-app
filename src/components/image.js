import React from 'react';

const Image = (props) => (
    <div className="row">
    {props.photos.map((image, index) => {
      return (
        <div key={index} className="col s4">
          <div className="card">
            <div className="card-image">
              <img className="responsive-img" src={image.image_url}/>
              <span className="card-title">{image.name}</span>
            </div>
            <div className="card-content">
              <p>Camera: {image.camera}</p>
              <p>Aperture: {image.aperture}</p>
              <p>Focal Length: {image.focal_length}</p>
            </div>
          </div>
        </div>
      );
    })}
    </div>
);


Image.propTypes = {
  photos: React.PropTypes.array,
};

export default Image;
