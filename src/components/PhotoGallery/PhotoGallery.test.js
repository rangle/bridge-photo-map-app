import React from 'react';
import { shallow } from 'enzyme';

import PhotoGallery from './PhotoGallery';

function setup(photos = []) {
  const props = {
    photos,
  };
  return shallow(<PhotoGallery {...props} />);
}

describe('PhotoGallery component', () => {
  it('renders an Images component', () => {
    const wrapper = setup();
    expect(wrapper.find('Images').length).toBe(1);
  });
});
