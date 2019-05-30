import React from 'react';
import { shallow } from 'enzyme';
import Comments from './Comments';

describe('comments list component', () => {
  it('renders a list of video comments', () => {
    const wrapper = shallow(<Comments comments={['Sweet video!', 'Loved it']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
