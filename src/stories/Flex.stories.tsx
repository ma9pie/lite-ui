import type { Meta } from '@storybook/react';
import React from 'react';

import { Flex } from '@/components';
import { Box } from '@/components/test';
import { FlexProps } from '@/types';

const meta = {
  title: 'Flex',
  args: {
    className: 'border-black',
    style: {
      width: 256,
      height: 256,
    },
    col: false,
    gap: 8,
  },
  component: Flex,
} satisfies Meta;

export default meta;

const Component = (props: FlexProps) => {
  return (
    <Flex {...props}>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Flex>
  );
};

export const Flex_ = {
  render: Component,
};
