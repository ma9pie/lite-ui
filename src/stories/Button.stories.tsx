import type { Meta } from '@storybook/react';
import React from 'react';

import Button from '@/components/common/Button';

const meta = {
  title: 'Components/Button',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const App = () => {
  return <Button></Button>;
};

export const Button_ = {
  render: () => <App></App>,
};
