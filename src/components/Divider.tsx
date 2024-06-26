import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import useEventListener from '@/hooks/useEventListener';
import { DividerProps } from '@/types';

const Divider = ({
  y = 0,
  size = 1,
  color = 'black',
  dashed = false,
  strokeDasharray = 2,
  ...props
}: DividerProps) => {
  const ref = useRef<HTMLHRElement>(null);
  const [width, setWidth] = useState(0);

  const updateWidth = useCallback(() => {
    if (!dashed || !ref.current) return;
    setWidth(ref.current.clientWidth);
  }, [dashed]);

  useEffect(() => {
    updateWidth();
  }, [dashed, updateWidth]);

  useEventListener('resize', updateWidth);

  if (dashed) {
    return (
      <DashWrapper ref={ref} {...props} y={y}>
        <Dash
          width={width}
          height={size}
          viewBox={`0 0 ${width} ${size}`}
          fill="none"
        >
          <path
            d={`M0 1H${width}`}
            stroke={color}
            strokeWidth={size}
            strokeDasharray={strokeDasharray}
          />
        </Dash>
      </DashWrapper>
    );
  }

  return (
    <Wrapper ref={ref} y={y} size={size} color={color} {...props}></Wrapper>
  );
};

export default Divider;

const Wrapper = styled.hr<DividerProps>`
  border: none;
  width: 100%;
  height: ${({ size }) => size && `${size}px`};
  background-color: ${({ color }) => color};
  margin: ${({ y }) => y && `${y}px 0px`};
`;
const DashWrapper = styled.div<DividerProps>`
  position: relative;
  margin: ${({ y }) => y && `${y}px 0px`};
`;
const Dash = styled.svg`
  position: absolute;
`;
