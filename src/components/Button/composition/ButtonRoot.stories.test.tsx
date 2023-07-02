import renderer from 'react-test-renderer';
import React from 'react';
import { ButtonRoot } from './ButtonRoot';

describe('ButtonRoot', () => {
  it('test_default_style_type', () => {
    const tree = renderer.create(<ButtonRoot />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_custom_children', () => {
    const tree = renderer
      .create(<ButtonRoot>Custom Children</ButtonRoot>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_custom_style_type_xs', () => {
    const tree = renderer.create(<ButtonRoot styleType="xs" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_custom_style_type_lg', () => {
    const tree = renderer.create(<ButtonRoot styleType="lg" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_empty_children_prop', () => {
    const tree = renderer.create(<ButtonRoot> </ButtonRoot>).toJSON();
    expect(tree).toMatchSnapshot(' ');
  });
});
