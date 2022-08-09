import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navbar from './Navbar';

export default {
  title: 'Component/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default: ComponentStory<typeof Navbar> = () => <Navbar />;
