import type { Meta } from '@storybook/react';
import React from 'react';

import { Code } from '@/components';
import { CodeProps } from '@/types';

const meta = {
  title: 'Code',
  args: { code: 'npm install @ma9pie/lite-ui' },
  component: Code,
} satisfies Meta;

export default meta;

const Component = (props: CodeProps) => {
  return (
    <>
      <Code {...props}></Code>
    </>
  );
};

export const Code_ = {
  render: Component,
};
