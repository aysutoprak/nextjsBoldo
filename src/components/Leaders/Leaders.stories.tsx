import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Leaders from './Leaders';

export default {
  title: 'Component/Leaders',
  component: Leaders,
} as ComponentMeta<typeof Leaders>;

export const Default: ComponentStory<typeof Leaders> = () => <Leaders />;
