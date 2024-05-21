import styled from '@emotion/styled';
import React from 'react';
import { CgClose } from 'react-icons/cg';

import useModalContext from '@/components/modal/useModalContext';
import { ModalHeaderProps } from '@/types';

const ModalHeader = ({
  hideCloseIcon,
  closeIcon,
  children,
}: ModalHeaderProps) => {
  const { onClose } = useModalContext();

  return (
    <Wrapper>
      <Box></Box>
      {children && <TitleBox>{children}</TitleBox>}
      <Box>
        {!hideCloseIcon && (
          <IconWrapper onClick={onClose}>
            {closeIcon || <CgClose size={20}></CgClose>}
          </IconWrapper>
        )}
      </Box>
    </Wrapper>
  );
};

export default ModalHeader;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;
const TitleBox = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Box = styled.div`
  width: 24px;
  height: 24px;
`;
const IconWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
