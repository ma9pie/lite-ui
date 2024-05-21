import React, { useCallback } from 'react';

import ModalContent from '@/components/modal/ModalContent';
import { ModalContext } from '@/components/modal/useModalContext';
import { ModalProps } from '@/types';
import { delay } from '@/utils';

const Modal = ({ duration = 200, isOpen, setIsOpen, ...props }: ModalProps) => {
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const deleteModal = useCallback(() => {
    setIsOpen(undefined);
  }, [setIsOpen]);

  const handleClose = async () => {
    closeModal();
    await delay(duration);
    deleteModal();
  };

  if (isOpen === undefined) {
    return null;
  }

  return (
    <ModalContext.Provider value={{ isOpen, duration, onClose: handleClose }}>
      <ModalContent {...props}></ModalContent>
    </ModalContext.Provider>
  );
};

export default Modal;
