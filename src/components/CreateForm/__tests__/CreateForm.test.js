import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import CreateForm from '../CreateForm.component';

describe('CreateForm component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <CreateForm />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should call "handleOnSave" on clicking the menu', () => {
    mockFn = jest.fn();
    const wrapper = shallow(<CreateForm />);
    wrapper.instance().handleOnSave = mockFn();
    wrapper.find('.save').simulate('press');
    // wrapper.find(SearchInput).simulate('submit');
    expect(mockFn).toHaveBeenCalled();
  });
});
