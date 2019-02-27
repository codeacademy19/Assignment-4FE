import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';

import LandingPage from '../LandingPage.component';

describe('CardView component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <LandingPage />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call "componentDidMount" on rendering', () => {
    mockFn = jest.fn();
    const wrapper = shallow(<LandingPage />);
    wrapper.instance().componentDidMount = mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
