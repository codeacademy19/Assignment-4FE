import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FormCard from '../FormCard.component';


describe('CardView component', () => {
  it('renders as expected', () => {
    const tree = renderer.create(
      <FormCard name="default" time="15/0/1" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
