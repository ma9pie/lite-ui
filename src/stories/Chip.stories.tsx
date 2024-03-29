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
      <Chip {...props} color="var(--red500)"></Chip>
      <Chip {...props} color="var(--yellow500)"></Chip>
      <Chip {...props} color="var(--green500)"></Chip>
      <Chip {...props} color="var(--blue500)"></Chip>
      <Chip {...props} color="var(--purple500)"></Chip>
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
