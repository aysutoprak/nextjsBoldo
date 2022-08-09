import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { ButtonProps } from './Button';

export default {
  title: 'Component/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args: JSX.IntrinsicAttributes & ButtonProps
) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  variant: 'primary',
  color: 'default',
  buttonText: 'Click',
  isLoading: true,
};
