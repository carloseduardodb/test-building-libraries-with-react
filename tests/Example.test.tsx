import renderer from 'react-test-renderer';
import React from 'react';
import { Example } from '../src/Example';

it('renders correctly', () => {
  const tree = renderer
    .create(<Example text="Clicked this many times" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
