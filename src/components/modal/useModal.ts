import { useCallback, useState } from 'react';

import { IsOpen } from '@/types';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<IsOpen>(undefined);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  return {
    isOpen,
    setIsOpen,
    openModal,
  };
};

export default useModal;
