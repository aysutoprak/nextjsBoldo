import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from './Footer';

export default {
  title: 'Component/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = () => <Footer />;
