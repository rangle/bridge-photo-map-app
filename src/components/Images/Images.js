import React from 'react';

const Images = ({ photos }) => (
    <div>
    {photos.map((image, index) => {
      return (
        <div key={index}>
            <div>
              <img src={image.image_url}/>
              <span>{image.name}</span>
            </div>
            <div>
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
