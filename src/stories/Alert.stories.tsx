import type { Meta } from '@storybook/react';
import React from 'react';

import { Alert } from '@/components';
import { AlertProps } from '@/types';

const meta = {
  title: 'Alert',
  args: {
    status: 'success',
    iconSize: 20,
    hideIcon: false,
    children: 'message',
  },
  component: Alert,
} satisfies Meta;

export default meta;

const Component = (props: AlertProps) => {
  return <Alert {...props}></Alert>;
};

export const Alert_ = {
  render: Component,
};
