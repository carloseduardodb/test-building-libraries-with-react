// import renderer from 'react-test-renderer';
// import { Button } from './index';

// describe('Button', () => {
//   it('renders correctly', () => {
//     const tree = renderer.create(<Button />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it('test_button_renders_with_custom_className_prop', () => {
//     const tree: any = renderer
//       .create(<Button className="custom-class" />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//     expect(tree.props.className).toEqual('custom-class');
//   });

//   it('test_button_renders_with_default_text', () => {
//     const tree = renderer.create(<Button>Click-Me</Button>).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it('test_button_renders_with_disabled_prop', () => {
//     const tree: any = renderer.create(<Button disabled />).toJSON();
//     expect(tree).toMatchSnapshot();
//     expect(tree.props.disabled).toEqual(true);
//   });

//   it('test_button_renders_with_type_prop', () => {
//     const tree: any = renderer.create(<Button type="submit" />).toJSON();
//     expect(tree).toMatchSnapshot();
//     expect(tree.props.type).toEqual('submit');
//   });
// });
