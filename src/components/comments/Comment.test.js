import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('comment component', () => {
  it('renders a video comment', () => {
    const wrapper = shallow(<Comment comment="Sweet video!" />);
    expect(wrapper).toMatchSnapshot();
  });
});
