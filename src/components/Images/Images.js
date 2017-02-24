import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';

import Image from './Image';

export default function Images({
  photos,
}) {
  return (
    <div>
        {photos.map( (image, index) => (
          <Link key={index} to={`/details/${image.id}`}>
            <Image photo={image} size={200} />
          </Link>
        ))}
    </div>
  );
}

Images.propTypes = {
  photos: T.array,
};
