import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { FaHome } from 'react-icons/fa';

interface Icons {
  icon: React.ElementType;
}

const ButtonIcon: React.FC<Icons> = ({ icon: Icon }) => (
  <div>
    <Icon />
  </div>
);

export default {
  title: 'Compositions/Button/ButtonIcon',
  component: ButtonIcon,
} as Meta;

const Template: StoryFn<Icons> = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: () => <FaHome />, // Exemplo usando o ícone FaHome do react-icons
};
