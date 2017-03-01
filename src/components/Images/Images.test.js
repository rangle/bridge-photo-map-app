import React from 'react';
import { shallow } from 'enzyme';

import Images from './Images';

function setup(photos = []) {
  const props = {
    photos,
  };
  return shallow(<Images {...props} />);
}

describe('Images component', () => {
  it('does not render an Image element', () => {
    const wrapper = setup();
    expect(wrapper.find('Image').length).toBe(0);
  });

  it('renders an Image for each photo', () => {
    const wrapperHasPhotos = setup([{}, {}, {}]);
    expect(wrapperHasPhotos.find('Image').length).toBe(3);
  });
});
