import React from 'react';
import { shallow } from 'enzyme';

import Image from './Image';

function setup(photo = {}, size = 0) {
  const props = {
    photo,
    size,
  };
  return shallow(<Image {...props} />);
}

describe('Image component', () => {
  const wrapper = setup();
  const wrapperHasImgSrc = setup({
    images: [{
      size: 0,
      https_url: 'https_url',
    }],
  });

  let link;
  let picture;
  let img;

  it('renders a Link element', () => {
    link = wrapper.find('Link');
    expect(link.length).toBe(1);
  });

  it('renders a picture element inside Link', () => {
    picture = link.children('picture');
    expect(picture.length).toBe(1);
  });

  it('renders at least one img inside picture', () => {
    img = picture.children('img');
    expect(img.length).toBeGreaterThanOrEqual(1);
  });

  it('has an empty source attribute', () => {
    expect(img.prop('src')).toBe('');
  });

  it('has an non-empty source attribute', () => {
    expect(wrapperHasImgSrc.find('img').prop('src')).toBe('https_url');
  });
});
