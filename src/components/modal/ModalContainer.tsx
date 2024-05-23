import styled from '@emotion/styled';
import React, { useEffect } from 'react';

import useModalContext from '@/components/modal/useModalContext';
import { IsOpen, ModalContentProps } from '@/types';

const ModalContainer = ({
  overlay,
  content,
  children,
  onChangeOpen = () => {},
}: ModalContentProps) => {
  const { isOpen, duration, onClose } = useModalContext();

  useEffect(() => {
    onChangeOpen(true);
    return () => {
      onChangeOpen(false);
    };
  }, []);

  return (
    <Wrapper isOpen={isOpen} duration={duration}>
      <Overlay onClick={onClose} {...overlay}></Overlay>
      <Content isOpen={isOpen} duration={duration} {...content}>
        {children}
      </Content>
    </Wrapper>
  );
};

export default ModalContainer;

const Wrapper = styled.div<{ isOpen: IsOpen; duration: number }>`
  position: relative;
  flex-direction: column;
  animation-name: ${({ isOpen }) => (isOpen ? 'fade-in' : 'fade-out')};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  z-index: 1000;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div<{ isOpen: IsOpen; duration: number }>`
  position: fixed;
  top: 50%;
  left: 50%;
  gap: 16px;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  overflow: auto;
  animation-name: ${({ isOpen }) => (isOpen ? 'scale-up' : 'scale-down')};
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  @keyframes scale-up {
    from {
      transform: translate(-50%, -50%) scale(0.9);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
  @keyframes scale-down {
    from {
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      transform: translate(-50%, -50%) scale(0.9);
    }
  }
`;
