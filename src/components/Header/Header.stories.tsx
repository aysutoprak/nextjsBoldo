import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header, { HeaderProps } from './Header';

export default {
  title: 'Component/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (
  args: JSX.IntrinsicAttributes & HeaderProps
) => (
  <div>
    <Header {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  headerFirst: 'About',
  headerSecond: 'We love to make great things, things that matter.',
  headerThird:
    'Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.',
};
