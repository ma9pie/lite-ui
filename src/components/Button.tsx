import styled from '@emotion/styled';
import React from 'react';

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
const BACKGROUND_COLOR = {
  default: 'var(--neutral500)',
  primary: 'var(--blue500)',
};

const Button = ({
  full = false,
  size = 'md',
  radius = 'md',
  color = 'default',
  disabled = false,
  disableRipple = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper
      full={full}
      size={size}
      radius={radius}
      color={color}
      disabled={disabled}
      disableRipple={disableRipple}
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
  color: white;
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

  ${(props) => {
    const { minWidth, height, padding, fontSize } = getProperties({
      defaultProp: 'md',
      optionalProp: props.size,
      obj: SIZE,
    });
    const radius = getProperties({
      defaultProp: 'md',
      optionalProp: props.radius,
      obj: RADIUS,
    });
    const backgroundColor = getProperties({
      defaultProp: 'default',
      optionalProp: props.color,
      obj: BACKGROUND_COLOR,
    });

    return `
    min-width: ${props.full ? '100%' : minWidth};
    height: ${height};
    border-radius: ${radius};
    padding: ${padding};
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    `;
  }}
`;
