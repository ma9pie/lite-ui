import styled from '@emotion/styled';
import React from 'react';

import { GridProps } from '@/types';

const Grid = ({
  style,
  repeatCount = 1,
  tracks = '1fr',
  gap,
  ...props
}: GridProps) => {
  console.log({ repeatCount, tracks });
  return (
    <Wrapper
      repeatCount={repeatCount}
      tracks={tracks}
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
  grid-template-columns: ${({ repeatCount, tracks }) =>
    `repeat(${repeatCount}, ${tracks})`};
`;
