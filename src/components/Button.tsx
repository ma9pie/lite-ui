import styled from '@emotion/styled';
import React from 'react';

import { ButtonProps } from '@/types';
import { getProperties } from '@/utils';

import Ripple from './common/Ripple';

const SIZE = {
  sm: {
    width: '64px',
    height: '32px',
    padding: '0px 12px',
    fontSize: '12px',
  },
  md: {
    width: '80px',
    height: '40px',
    padding: '0px 16px',
    fontSize: '14px',
  },
  lg: {
    width: '96px',
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

const Button = ({ disableRipple, children, ...props }: ButtonProps) => {
  return (
    <Wrapper {...props}>
      {children}
      {!disableRipple && <Ripple></Ripple>}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<ButtonProps>`
  position: relative;
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
    const { width, height, padding, fontSize } = getProperties({
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
    width: ${props.full ? '100%' : width};
    height: ${height};
    border-radius: ${radius};
    padding: ${padding};
    background-color: ${backgroundColor};
    font-size: ${fontSize};
    `;
  }}
`;
