import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Values from './Values';

export default {
  title: 'Component/Values',
  component: Values,
} as ComponentMeta<typeof Values>;

export const Default: ComponentStory<typeof Values> = () => <Values />;
