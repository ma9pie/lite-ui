import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';

import { ChipProps } from '@/types';
import { calcLuminance, parseRGBString } from '@/utils';

const Chip = ({
  textColor,
  bgColor = 'var(--neutral500)',
  padding = '8px 16px',
  radius,
  children,
  ...props
}: ChipProps) => {
  const ref = useRef(null);

  const [height, setHeight] = useState(0);
  const [luminance, setLuminance] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const { clientHeight } = ref.current;
    setHeight(clientHeight);

    const backgroundColor = window
      .getComputedStyle(ref.current)
      .getPropertyValue('background-color');
    const rgb = parseRGBString(backgroundColor);
    const _luminance = calcLuminance(...rgb);
    setLuminance(_luminance);
  }, [bgColor]);

  return (
    <Wrapper
      ref={ref}
      textColor={textColor || luminance > 0.5 ? 'black' : 'white'}
      bgColor={bgColor}
      padding={padding}
      radius={radius || height}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div<ChipProps>`
  width: fit-content;
  color: ${({ textColor }) => textColor};
  padding: ${({ padding }) => padding};
  border-radius: ${({ radius }) => `${radius}px`};
  background-color: ${({ bgColor }) => bgColor};
`;
