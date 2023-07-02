import renderer from 'react-test-renderer';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { ButtonRoot } from './composition/ButtonRoot';
import { Button } from './index';

describe('Button', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<ButtonRoot />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with custom children', () => {
    const customChildren = (
      <Button.Root>
        <Button.Icon icon={FaHome} />
        <Button.Content text="Click-Me" type="md" />
      </Button.Root>
    );
    const tree = renderer
      .create(<ButtonRoot>{customChildren}</ButtonRoot>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
