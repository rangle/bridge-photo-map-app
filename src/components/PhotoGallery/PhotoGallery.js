import React, { PropTypes as T } from 'react';
import Images from '../Images/Images';

export default function PhotoGallery({
  photos,
}) {
  return (
    <Images photos={photos}/>
  );
}

PhotoGallery.propTypes = {
  photos: T.array.isRequired,
};
