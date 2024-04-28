import { useAtom } from 'jotai';
import { useCallback } from 'react';

import { isOpenMobileNavAtom } from '@/states';

const useMobileNav = () => {
  const [isOpenMobileNav, setIsOpenMobileNav] = useAtom(isOpenMobileNavAtom);

  const openMobileNav = useCallback(() => {
    setIsOpenMobileNav(true);
  }, [setIsOpenMobileNav]);

  const closeMobileNav = useCallback(() => {
    setIsOpenMobileNav(false);
  }, [setIsOpenMobileNav]);

  return { isOpenMobileNav, openMobileNav, closeMobileNav };
};

export default useMobileNav;
