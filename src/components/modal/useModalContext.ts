import { createContext, useContext } from 'react';

export const ModalContext = createContext({
  isOpen: undefined as boolean | undefined,
  duration: 200,
  onClose: (() => {}) as () => void,
});

const useModalContext = () => {
  const { isOpen, duration, onClose } = useContext(ModalContext);

  return { isOpen, duration, onClose };
};

export default useModalContext;
