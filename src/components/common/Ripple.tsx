import styled from '@emotion/styled';
import debounce from 'lodash/debounce';
import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface RippleItem {
  key: string;
  size: number;
  x: number;
  y: number;
}

interface Props {
  duration?: number;
}

const Ripple = ({ duration = 1000 }: Props) => {
  const [ripples, setRipples] = useState<RippleItem[]>([]);

  const clearRipples = useCallback(() => {
    setRipples([]);
  }, []);
  const debouncedClearRipples = useMemo(
    () => debounce(clearRipples, duration),
    [duration, clearRipples]
  );

  const createRipple = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      const { currentTarget, clientX, clientY } = e;
      const { clientWidth, clientHeight } = currentTarget;
      const rect = currentTarget.getBoundingClientRect();

      const key = uuidv4();
      const size = Math.max(clientWidth, clientHeight);
      const x = clientX - rect.x - size / 2;
      const y = clientY - rect.y - size / 2;

      setRipples((prev) => [...prev, { key, size, x, y }]);
      debouncedClearRipples();
    },
    [debouncedClearRipples]
  );

  return (
    <Container onClick={createRipple}>
      {ripples.length > 0 &&
        ripples.map((ripple, index) => {
          return (
            <Span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                animationDuration: `${duration}ms`,
              }}
            ></Span>
          );
        })}
    </Container>
  );
};

export default Ripple;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: inherit;
`;
const Span = styled.div`
  @keyframes ripple {
    from {
      opacity: 0.35;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
  position: absolute;
  border-radius: 100%;
  background-color: white;
  animation-name: ripple;
  animation-fill-mode: forwards;
  pointer-events: none;
`;
