import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Grid } from '@/components';
import { GridProps } from '@/types';

const meta = {
  title: 'Grid',
  args: {
    repeatCount: 1,
    gap: 8,
  },
  component: Grid,
} satisfies Meta;

export default meta;

const Component = (props: GridProps) => {
  return (
    <Grid {...props}>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
      <Square></Square>
    </Grid>
  );
};

export const Grid_ = {
  render: Component,
};

const Square = styled.div`
  height: 64px;
  background-color: gray;
`;
