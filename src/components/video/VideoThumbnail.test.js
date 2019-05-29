import React from 'react';
import { shallow } from 'enzyme';
import VideoThumbnail from './VideoThumbnail';

describe('video thumbnail component', () => {
  it('renders a thumbnail image', () => {
    const wrapper = shallow(<VideoThumbnail id="-UoeQOC-5iw" url={'https://i.ytimg.com/an_webp/-UoeQOC-5iw/mqdefault_6s.webp?du=3000&sqp=CJTGuucF&rs=AOn4CLBj3MWOwYZBOJP2DxUZ27ygB-Kb8g'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
