import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Spinner, { SpinnerProps } from './Spinner';

export default {
  title: 'Component/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (
  args: JSX.IntrinsicAttributes & SpinnerProps
) => <Spinner {...args} />;

export const Default = Template.bind({});

Default.args = {
  fill: 'dark',
  size: 'medium',
};
