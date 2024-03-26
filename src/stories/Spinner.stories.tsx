import type { Meta } from '@storybook/react';
import React from 'react';

import { Spinner } from '@/components';
import { SpinnerProps } from '@/types';

const meta = {
  title: 'Spinner',
  args: { size: 32, lineWidth: 3 },
  component: Spinner,
} satisfies Meta;

export default meta;

const Component = (props: SpinnerProps) => {
  return <Spinner {...props}></Spinner>;
};

export const Spinner_ = {
  render: Component,
};
