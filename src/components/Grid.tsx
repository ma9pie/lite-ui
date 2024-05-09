import styled from '@emotion/styled';
import React from 'react';

import { GridProps } from '@/types';
import { alignItem, justifyContent } from '@/utils';

const Grid = ({
  style,
  row,
  col,
  gap,
  justify,
  items,
  ...props
}: GridProps) => {
  return (
    <Wrapper
      row={row}
      col={col}
      justify={justify}
      items={items}
      style={{ gap, ...style }}
      {...props}
    >
      {props.children}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div<GridProps>`
  display: grid;
  grid-template-rows: ${({ row }) => row && `repeat(${row}, minmax(0, 1fr))`};
  grid-template-columns: ${({ col }) =>
    col && `repeat(${col}, minmax(0, 1fr))`};
  justify-content: ${({ justify }) => justifyContent(justify)};
  align-items: ${({ items }) => alignItem(items)};
`;
