import React, { PropTypes as T } from 'react';
import { Link } from 'react-router';

export default function Image({
  photo,
  size,
}) {
  const getPhotoUrl = (s, img) => {
    if (img && img.images) {
      const source = img.images.find( i => i.size === s );
      return source ? (source.https_url || source.url) : '';
    }
    return '';
  };

  return (
    <Link to={(photo && photo.id) ? `/details/${photo.id}` : '#'}>
      <picture>
        <img className="z-depth-3" src={getPhotoUrl(size, photo)} />
      </picture>
    </Link>
  );
}

Image.propTypes = {
  photo: T.object,
  size: T.number,
};
