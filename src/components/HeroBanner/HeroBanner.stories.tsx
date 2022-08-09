import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeroBanner from './HeroBanner';

export default {
  title: 'Component/HeroBanner',
  component: HeroBanner,
} as ComponentMeta<typeof HeroBanner>;

export const Default: ComponentStory<typeof HeroBanner> = () => <HeroBanner />;
