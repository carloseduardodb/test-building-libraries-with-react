import { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
} as Meta;

export const Default: StoryObj<typeof Button> = {};

Default.args = {
  children: 'Click me',
};
