import React, { PropTypes } from 'react';
import Images from '../Images/Images';

export default function PhotoGallery({
  photos,
}) {
  return (
    <div>
      <Images photos={photos}/>
    </div>
  );
}

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};
