import React, { PropTypes as T } from 'react';

import Image from './Image';

export default function Images({
  photos,
}) {
  return (
    <div>
        {photos.map( (image, index) => <Image key={index} photo={image} size={200} />)}
    </div>
  );
}

Images.propTypes = {
  photos: T.array,
};
