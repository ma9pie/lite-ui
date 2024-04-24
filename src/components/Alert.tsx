import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import {
  AiOutlineCheckCircle as SuccessSvg,
  AiOutlineCloseCircle as ErrorSvg,
  AiOutlineInfoCircle as InfoSvg,
  AiOutlineWarning as WarningSvg,
} from 'react-icons/ai';

import { AlertProps } from '../types';

const Alert = ({
  status = 'success',
  iconSize = 20,
  hideIcon = false,
  children,
}: AlertProps) => {
  const spec = useMemo(() => {
    switch (status) {
      case 'success':
        return {
          iconColor: 'var(--green600)',
          borderColor: 'var(--green200)',
          backgroundColor: 'var(--green50)',
          icon: SuccessSvg,
        };
      case 'info':
        return {
          iconColor: 'var(--blue600)',
          borderColor: 'var(--blue200)',
          backgroundColor: 'var(--blue50)',
          icon: InfoSvg,
        };
      case 'warn':
        return {
          iconColor: 'var(--amber500)',
          borderColor: 'var(--amber200)',
          backgroundColor: 'var(--amber50)',
          icon: WarningSvg,
        };
      case 'error':
        return {
          iconColor: 'var(--red600)',
          borderColor: 'var(--red200)',
          backgroundColor: 'var(--red50)',
          icon: ErrorSvg,
        };
      default:
        return null;
    }
  }, [status]);

  if (!spec) {
    return null;
  }
  return (
    <Wrapper
      borderColor={spec.borderColor}
      backgroundColor={spec.backgroundColor}
    >
      <IconWrapper>
        {!hideIcon && spec.icon({ size: iconSize, color: spec.iconColor })}
      </IconWrapper>
      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Alert;

const Wrapper = styled.div<{ borderColor: string; backgroundColor: string }>`
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ borderColor }) => borderColor};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
const IconWrapper = styled.div``;
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Content = styled.div`
  word-wrap: break-word;
`;
