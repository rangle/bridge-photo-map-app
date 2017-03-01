import React, { PropTypes as T } from 'react';

import Images from '../Images/Images';

export default function PhotoGallery({
  photos,
}) {
  return (
    <div className="container">
      <Images photos={photos}/>
    </div>
  );
}

PhotoGallery.propTypes = {
  photos: T.array.isRequired,
};
