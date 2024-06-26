import styled from '@emotion/styled';
import React from 'react';

import { SpacerProps } from '@/types';

const Spacer = ({ x = 1, y = 1, ...props }: SpacerProps) => {
  return <Wrapper x={x} y={y} {...props}></Wrapper>;
};

export default Spacer;

const Wrapper = styled.div<SpacerProps>`
  width: ${({ x }) => `${x}px`};
  height: ${({ y }) => `${y}px`};
`;
