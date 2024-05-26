import styled from '@emotion/styled';
import React, { useMemo } from 'react';

import Ripple from '@/components/common/Ripple';
import { ButtonProps } from '@/types';
import { getProperties } from '@/utils';

const SIZE = {
  sm: {
    minWidth: '64px',
    height: '32px',
    padding: '0px 12px',
    fontSize: '12px',
  },
  md: {
    minWidth: '80px',
    height: '40px',
    padding: '0px 16px',
    fontSize: '14px',
  },
  lg: {
    minWidth: '96px',
    height: '48px',
    padding: '0px 24px',
    fontSize: '16px',
  },
};
const RADIUS = {
  none: '0px',
  sm: '8px',
  md: '12px',
  lg: '14px',
  full: '9999px',
};
const BACKGROUND_COLOR: { [key: string]: string } = {
  default: 'var(--neutral300)',
  primary: 'var(--blue500)',
};

const Button = ({
  style,
  full = false,
  size = 'md',
  radius = 'md',
  color = 'default',
  disabled = false,
  disableRipple = false,
  children,
  ...props
}: ButtonProps) => {
  const { minWidth, height, padding, fontSize } = useMemo(
    () =>
      getProperties({
        defaultProp: 'md',
        optionalProp: size,
        obj: SIZE,
      }),
    [size]
  );
  const borderRadius = useMemo(
    () =>
      getProperties({
        defaultProp: 'md',
        optionalProp: radius,
        obj: RADIUS,
      }),
    [radius]
  );
  const backgroundColor = useMemo(
    () => BACKGROUND_COLOR[color] || color,
    [color]
  );

  return (
    <Wrapper
      full={full}
      size={size}
      radius={radius}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
      style={{
        minWidth: full ? '100%' : minWidth,
        height,
        padding,
        fontSize,
        borderRadius,
        color: color === 'primary' ? 'white' : 'black',
        backgroundColor,
        ...style,
      }}
      {...props}
    >
      {children}
      {!disabled && !disableRipple && <Ripple></Ripple>}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<ButtonProps>`
  position: relative;
  width: fit-content;
  border: none;
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.25s;
  overflow: hidden;
  cursor: pointer;

  &:active:not(:disabled) {
    transform: scale(95%);
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
