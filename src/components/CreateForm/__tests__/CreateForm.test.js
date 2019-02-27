import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CreateForm from '../CreateForm.component';


describe('CardView component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <CreateForm />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
