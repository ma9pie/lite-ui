import { css } from '@emotion/css';
import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';

import { HandleProps, SwitchProps, TrackProps } from '@/types';

const Switch = ({
  size = 32,
  trackPadding = 4,
  duration = 150,
  disabled = false,
  value,
  onChange = () => {},
}: SwitchProps) => {
  const [localChecked, setLocalChecked] = useState(false);

  const checked = useMemo(
    () => (value == undefined ? localChecked : value),
    [value, localChecked]
  );
  const padding = useMemo(
    () => (size > 2 * trackPadding ? trackPadding : size / 2),
    [size, trackPadding]
  );

  const toggle = () => {
    const _checked = !checked;
    setLocalChecked(_checked);
    onChange(_checked);
  };

  return (
    <Track
      className={style}
      checked={checked}
      size={size}
      padding={padding}
      duration={duration}
      disabled={disabled}
      onClick={toggle}
    >
      <Handle
        className={checked ? 'switch-checked' : 'switch-unchecked'}
        checked={checked}
        size={size}
        padding={padding}
        duration={duration}
      ></Handle>
    </Track>
  );
};

export default Switch;

const style = css`
  @keyframes switch-checked {
    0% {
      transform: scaleX(100%);
    }
    50% {
      transform: scaleX(120%);
    }
    100% {
      transform: scaleX(100%);
    }
  }
  @keyframes switch-unchecked {
    0% {
      transform: scaleX(100%);
    }
    50% {
      transform: scaleX(120%);
    }
    100% {
      transform: scaleX(100%);
    }
  }
  .switch-checked {
    transform-origin: right;
    animation: switch-checked 0.2s ease-in-out forwards;
  }
  .switch-unchecked {
    transform-origin: left;
    animation: switch-unchecked 0.2s ease-in-out forwards;
  }
`;
const Track = styled.div<TrackProps>`
  position: relative;
  width: ${({ size, padding }) => `${2 * (size - padding)}px`};
  height: ${({ size }) => `${size}px`};
  padding: ${({ padding }) => `${padding}px`};
  border-radius: ${({ size }) => `${size}px`};
  background-color: ${({ checked }) =>
    checked ? 'var(--neutral600)' : ' var(--neutral300)'};
  cursor: pointer;
  transition-property: background-color;
  transition-timing-function: ease-in-out;
  transition-duration: ${({ duration }) => `${duration}ms`};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;
const Handle = styled.div<HandleProps>`
  position: absolute;
  left: ${({ checked, size, padding }) =>
    checked ? `${size - padding}px` : `${padding}px`};
  height: ${({ size, padding }) => `${size - 2 * padding}px`};
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: white;
  transition-property: left;
  transition-timing-function: ease-in-out;
  transition-duration: ${({ duration }) => `${duration}ms`};
`;
