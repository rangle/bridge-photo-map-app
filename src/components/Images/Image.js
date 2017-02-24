import React, { PropTypes as T } from 'react';

export default function Image({
  photo,
  size,
}) {
  const getPhotoUrl = (s, img) => {
    const source = img.images.find( i => i.size === s );
    return source ? (source.https_url || source.url) : '';
  };

  return (
    <picture><img className="z-depth-3" src={getPhotoUrl(size, photo)} /></picture>
  );
}

Image.propTypes = {
  photo: T.object,
  size: T.number,
};
