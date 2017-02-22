import React, { PropTypes } from 'react';

import Images from '../Images/Images';

export default function RelatedPhotoGallery({
  photos,
}) {
  // get('/photos/search', { geo: '43.6532,-79.3832,1km' }).then(res => console.log(res));
  return (
    <div>
      <Images photos={photos}/>
    </div>
  );
}

RelatedPhotoGallery.propTypes = {
  photos: PropTypes.array,
};
