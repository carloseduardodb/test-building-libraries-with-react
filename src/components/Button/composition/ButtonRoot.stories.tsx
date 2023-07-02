import { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { ButtonRoot } from './ButtonRoot';

export default {
  title: 'Compositions/Button/ButtonRoot',
  component: ButtonRoot,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
} as Meta;

export const Default: StoryObj<typeof ButtonRoot> = {};

Default.args = {
  children: 'Click-Me',
};
