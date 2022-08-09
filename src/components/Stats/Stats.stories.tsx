import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Stats from './Stats';

export default {
  title: 'Component/Stats',
  component: Stats,
} as ComponentMeta<typeof Stats>;

export const Default: ComponentStory<typeof Stats> = () => <Stats />;
