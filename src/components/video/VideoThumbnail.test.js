import React from 'react';
import { shallow } from 'enzyme';
import VideoThumbnail from './VideoThumbnail';

describe('video thumbnail component', () => {
  it('renders a thumbnail image', () => {
    const wrapper = shallow(<VideoThumbnail id="-UoeQOC-5iw" url={'https://img.youtube.com/vi/-UoeQOC-5iw/0.jpg'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
