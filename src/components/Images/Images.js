import React from 'react';
import { Link } from 'react-router';

const Images = ({ photos }) => (
    <div>
    {photos.map((image, index) => {
      return (
        <div key={index}>
            <div>
              <Link to={`/details/${image.id}`}>
                <img className="z-depth-3" src={image.image_url}/>
              </Link>
            </div>
            <div>
              <h5>{image.name}</h5>
              <p>Camera: {image.camera}</p>
              <p>Aperture: {image.aperture}</p>
              <p>Focal Length: {image.focal_length}</p>
            </div>
        </div>
      );
    })}
    </div>
);


Images.propTypes = {
  photos: React.PropTypes.array,
};

export default Images;
