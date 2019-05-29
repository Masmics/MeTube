import { shallow } from 'enzyme';
import React from 'react';
import VideoThumbnails from './VideoThumbnails';

describe('video thumbnails list component', () => {
  it('renders video thumbnails', () => {
    const wrapper = shallow(<VideoThumbnails />);
    expect(wrapper).toMatchSnapshot();
  });
});
