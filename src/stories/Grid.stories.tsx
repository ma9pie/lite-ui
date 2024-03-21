import type { Meta } from '@storybook/react';
import React from 'react';

import { Grid } from '@/components';
import { Box } from '@/components/test';
import { GridProps } from '@/types';

const meta = {
  title: 'Grid',
  args: {
    className: 'border-black',
    style: {
      width: 256,
      height: 256,
    },
    row: 2,
    col: 2,
    gap: 8,
  },
  component: Grid,
} satisfies Meta;

export default meta;

const Component = (props: GridProps) => {
  return (
    <Grid {...props}>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Grid>
  );
};

export const Grid_ = {
  render: Component,
};
