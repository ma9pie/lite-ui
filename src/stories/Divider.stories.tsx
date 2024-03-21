import type { Meta } from '@storybook/react';
import React from 'react';

import { Divider } from '@/components';
import { DividerProps } from '@/types';

const meta = {
  title: 'Divider',
  args: {
    y: 0,
    size: 1,
    strokeDasharray: 1,
  },
  component: Divider,
} satisfies Meta;

export default meta;

const Component = (props: DividerProps) => {
  return <Divider {...props}></Divider>;
};

export const Divider_ = {
  render: Component,
};
