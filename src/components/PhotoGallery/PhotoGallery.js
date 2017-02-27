import React, { PropTypes } from 'react';
import Images from '../Images/Images';

export default function PhotoGallery({
  photos,
}) {
  return (
    <Images photos={photos}/>
  );
}

PhotoGallery.propTypes = {
  photos: PropTypes.array.isRequired,
};
