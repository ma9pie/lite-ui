import { Dispatch, ReactNode, SetStateAction } from 'react';

import { DefaultProps, StyleProps } from '@/types';

export type IsOpen = boolean | undefined;
export interface ModalProps extends ModalContentProps {
  duration?: number;
  isOpen: IsOpen;
  setIsOpen: Dispatch<SetStateAction<IsOpen>>;
}
export interface ModalContentProps {
  overlay?: StyleProps;
  content?: StyleProps;
  zIndex?: number;
  children?: ReactNode;
  onChangeOpen?: (value: boolean) => void;
}
export interface ModalHeaderProps extends DefaultProps {
  hideCloseIcon?: boolean;
  closeIcon?: ReactNode;
  children?: ReactNode;
}
export interface ModalFooterProps extends DefaultProps {
  cancelBtnText?: string;
  confirmBtnText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}
