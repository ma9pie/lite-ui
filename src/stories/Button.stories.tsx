import type { Meta } from '@storybook/react';
import React from 'react';

import { Button } from '@/components';
import { ButtonProps } from '@/types';

const meta = {
  title: 'Button',
  args: {},
  component: Button,
} satisfies Meta;

export default meta;

const Component = (props: ButtonProps) => {
  return (
    <>
      <Button {...props}>Button</Button>
    </>
  );
};

export const Button_ = {
  render: Component,
};
