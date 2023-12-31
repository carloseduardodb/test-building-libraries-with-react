import { Meta, StoryObj } from '@storybook/react';
import { withActions } from '@storybook/addon-actions/decorator';
import { FaHome } from 'react-icons/fa';
import React from 'react';
import { ButtonRoot } from './composition/ButtonRoot';
import { Button } from './index';

export default {
  title: 'Components/Button',
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
  children: (
    <Button.Root>
      <Button.Icon icon={FaHome} />
      <Button.Content text="Click-Me" type="md" />
    </Button.Root>
  ),
};
