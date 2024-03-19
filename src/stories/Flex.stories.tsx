import type { Meta } from '@storybook/react';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Flex } from '@/components';
import { FlexProps } from '@/types';

const meta = {
  title: 'Flex',
  args: {
    className: 'w-64 h-64 border-black',
    wrap: false,
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

const Box = styled.div`
  ${tw`w-6 h-6 bg-neutral-500`};
`;
