import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import FillForm from '../FillForm.component';

describe('FillForm component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <FillForm />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call "componentDidMount" on rendering', () => {
    mockFn = jest.fn();
    const wrapper = shallow(<FillForm />);
    wrapper.instance().componentDidMount = mockFn();
    expect(mockFn).toHaveBeenCalled();
  });
});
