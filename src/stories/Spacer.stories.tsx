import type { Meta } from '@storybook/react';
import React from 'react';

import { Flex, Spacer } from '@/components';
import { Box } from '@/components/test';
import { SpacerProps } from '@/types';

const meta = {
  title: 'Spacer',
  args: {
    x: 1,
    y: 1,
  },
  component: Spacer,
} satisfies Meta;

export default meta;

const Component = (props: SpacerProps) => {
  return (
    <>
      <Flex>
        <Box></Box>
        <Spacer {...props}></Spacer>
        <Box></Box>
      </Flex>
      <Spacer {...props}></Spacer>
      <Flex>
        <Box></Box>
        <Spacer {...props}></Spacer>
        <Box></Box>
      </Flex>
    </>
  );
};

export const Spacer_ = {
  render: Component,
};
