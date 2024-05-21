import styled from '@emotion/styled';
import React from 'react';

import Button from '@/components/Button';
import useModalContext from '@/components/modal/useModalContext';
import { ModalFooterProps } from '@/types';

const ModalFooter = ({
  cancelBtnText = 'Cancel',
  confirmBtnText = 'Confirm',
  onCancel = () => {},
  onConfirm = () => {},
  ...props
}: ModalFooterProps) => {
  const { onClose } = useModalContext();

  const handleCancel = () => {
    onCancel();
    onClose();
  };

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Wrapper {...props}>
      <Button size="sm" color="default" onClick={handleCancel}>
        {cancelBtnText}
      </Button>
      <Button size="sm" color="primary" onClick={handleConfirm}>
        {confirmBtnText}
      </Button>
    </Wrapper>
  );
};

export default ModalFooter;

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 8px;
  padding-top: 16px;
`;
