import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Flex } from '@/components';
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

const Box = styled.div`
  width: 24px;
  height: 24px;
  background-color: gray;
`;
