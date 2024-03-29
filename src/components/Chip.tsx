import styled from '@emotion/styled';
import React, { useRef } from 'react';

import { ChipProps } from '@/types';

const SIZE_MAP = {
  sm: { height: '24px', padding: '0px 8px', fontSize: '12px' },
  md: { height: '28px', padding: '0px 12px', fontSize: '14px' },
  lg: { height: '32px', padding: '0px 16px', fontSize: '15px' },
};

const Chip = ({
  variant = 'filled',
  size = 'md',
  color = 'var(--neutral500)',
  radius,
  children,
  ...props
}: ChipProps) => {
  const ref = useRef(null);

  return (
    <Wrapper
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      radius={radius || 9999}
      {...props}
    >
      {children}
    </Wrapper>
  );
};

export default Chip;

const Wrapper = styled.div<ChipProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: ${({ radius }) => `${radius}px`};
  ${({ variant, color }) => {
    switch (variant) {
      case 'filled':
        return `background-color: ${color};`;
      case 'outlined':
        return `border: 2px solid ${color};`;
    }
  }}
  ${({ size }) => {
    const { height, padding, fontSize } =
      SIZE_MAP[size || 'md'] || SIZE_MAP['md'];
    return `
    height: ${height};
    padding: ${padding};
    font-size: ${fontSize};
    `;
  }}
`;
