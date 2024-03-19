import styled from '@emotion/styled';
import React from 'react';

import { GridProps } from '@/types';
import { alignItem, justifyContent } from '@/utils';

const Grid = (props: GridProps) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Grid;

const Wrapper = styled.div<GridProps>`
  display: grid;
  grid-template-rows: ${(props) => `repeat(${props.row}, minmax(0, 1fr))`};
  grid-template-columns: ${(props) => `repeat(${props.col}, minmax(0, 1fr))`};
  gap: ${(props) => `${props.gap}px`};
  justify-content: ${(props) => justifyContent(props.justify)};
  align-items: ${(props) => alignItem(props.items)};
`;
