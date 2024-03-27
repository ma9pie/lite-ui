import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Chip } from '@/components';
import { ChipProps } from '@/types';

const meta = {
  title: 'Chip',
  args: { children: 'Chip' },
  component: Chip,
} satisfies Meta;

export default meta;

const Component = (props: ChipProps) => {
  return (
    <Container>
      <Chip {...props}></Chip>
      <Chip {...props} bgColor="var(--red500)"></Chip>
      <Chip {...props} bgColor="var(--yellow500)"></Chip>
      <Chip {...props} bgColor="var(--green500)"></Chip>
      <Chip {...props} bgColor="var(--blue500)"></Chip>
      <Chip {...props} bgColor="var(--purple500)"></Chip>
    </Container>
  );
};

export const Chip_ = {
  render: Component,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
