import renderer from 'react-test-renderer';
import React from 'react';
import { ButtonIcon } from './ButtonIcon';

describe('ButtonIcon', () => {
  it('renders correctly with a given icon', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    const tree = renderer.create(<ButtonIcon icon={MockIcon} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly without an icon', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    const tree = renderer.create(<ButtonIcon icon={MockIcon} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
