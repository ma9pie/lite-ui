import type { Meta } from '@storybook/react';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { Flex } from '@/components';

const meta = {
  title: 'Flex',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const Page = () => {
  return (
    <div>
      <Flex gap={8}>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Flex>
    </div>
  );
};

export const Flex_ = {
  render: Page,
};

const Box = styled.div`
  ${tw`w-6 h-6 bg-neutral-500`};
`;
