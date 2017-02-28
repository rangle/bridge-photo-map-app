import React from 'react';
import { shallow } from 'enzyme';

import RelatedPhotoGallery from './RelatedPhotoGallery';

function setup(photos = []) {
  const props = {
    photos,
  };
  return shallow(<RelatedPhotoGallery {...props} />);
}

describe('RelatedPhotoGallery component', () => {
  it('renders an Images component', () => {
    const wrapper = setup();
    expect(wrapper.find('Images').length).toBe(1);
  });
});
