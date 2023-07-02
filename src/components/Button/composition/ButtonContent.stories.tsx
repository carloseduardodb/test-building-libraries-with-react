import React from 'react';
import { StoryFn, Meta } from '@storybook/react';

interface ButtonContentProps {
  text: string;
  type: 'xs' | 'md' | 'lg';
}

const ButtonContent: React.FC<ButtonContentProps> = ({ text, type }) => {
  let buttonClass = '';

  switch (type) {
    case 'xs':
      buttonClass = 'text-xs';
      break;
    case 'md':
      buttonClass = 'text-md';
      break;
    case 'lg':
      buttonClass = 'text-lg';
      break;
    default:
      break;
  }
  return <div className={buttonClass}>{text}</div>;
};

export default {
  title: 'Compositions/Button/ButtonContent',
  component: ButtonContent,
} as Meta;

const Template: StoryFn<ButtonContentProps> = (args) => (
  <ButtonContent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'Button Content',
  type: 'md',
};
