import renderer from 'react-test-renderer';
import React from 'react';
import { ButtonContent } from './ButtonContent';

describe('ButtonContent', () => {
  it('test_render_with_text_and_type_props', () => {
    const tree = renderer
      .create(<ButtonContent text="Hello World" type="md" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_render_with_xs_type_prop', () => {
    const tree = renderer
      .create(<ButtonContent text="Hello World" type="xs" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_render_with_md_type_prop', () => {
    const tree = renderer
      .create(<ButtonContent text="Hello World" type="md" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_render_with_empty_text_prop', () => {
    const tree = renderer.create(<ButtonContent text="" type="md" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test_render_with_invalid_type_prop', () => {
    const value: any = 'invalid';
    const tree = renderer
      .create(<ButtonContent text="Hello World" type={value} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
