import type { Meta } from '@storybook/react';
import React from 'react';

import { Test } from '@/components';

const meta = {
  title: 'Components/Test',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const App = () => {
  return <Test></Test>;
};

export const Test_ = {
  render: () => <App></App>,
};
