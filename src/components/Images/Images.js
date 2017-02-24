import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';

import Image from './Image';

export default function Images({
  photos,
}) {
  return (
    <div>
        {photos.map( (image, index) => (
          <Link to={`/details/${image.id}`}>
            <Image key={index} photo={image} size={440} />
          </Link>
        ))}
    </div>
  );
}

Images.propTypes = {
  photos: T.array,
};
