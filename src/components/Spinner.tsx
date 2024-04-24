import styled from '@emotion/styled';
import React from 'react';

import { SpinnerProps } from '../types';

function Spinner({
  size = 32,
  color = 'var(--neutral300)',
  lineWidth = 3,
  duration = 750,
  ...props
}: SpinnerProps) {
  return (
    <Wrapper
      {...props}
      size={size}
      color={color}
      lineWidth={lineWidth}
      duration={duration}
    ></Wrapper>
  );
}

export default Spinner;

const Wrapper = styled.div<SpinnerProps>`
  width: ${({ size }) => `${size}px`};
  aspect-ratio: 1/1;
  border-width: ${({ lineWidth }) => `${lineWidth}px`};
  border-style: solid;
  border-color: ${({ color }) => color};
  border-radius: 100%;
  border-top-color: transparent;
  background-color: transparent;
  animation-name: spin;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${({ duration }) => `${duration}ms`};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
