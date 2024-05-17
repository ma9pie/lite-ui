import React, { useRef } from 'react';
import { CgClose } from 'react-icons/cg';
import tw, { styled } from 'twin.macro';

import SideNav from '@/components/layouts/SideNav';
import useClickOutside from '@/hooks/useClickOutside';
import useMobileNav from '@/hooks/useMobileNav';

const MobileNav = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { isOpenMobileNav, closeMobileNav } = useMobileNav();

  useClickOutside(ref, closeMobileNav);

  return (
    <Wrapper>
      <Overlay style={{ opacity: isOpenMobileNav ? 100 : 0 }}></Overlay>

      <Content ref={ref} style={{ right: isOpenMobileNav ? 0 : -240 }}>
        <Top>
          <IconWrapper onClick={closeMobileNav}>
            <CgClose size={24}></CgClose>
          </IconWrapper>
        </Top>

        <SideNav></SideNav>
      </Content>
    </Wrapper>
  );
};

export default MobileNav;

const Wrapper = styled.div`
  ${tw``};
`;
const Overlay = styled.div`
  ${tw`fixed top-0 left-0 w-screen h-full min-h-screen backdrop-blur transition-[opacity] duration-200 z-20 pointer-events-none`};
`;
const Content = styled.div`
  ${tw`fixed top-0 w-60 h-full min-h-screen bg-white transition-[right] duration-200 z-20 overflow-auto overscroll-none`};
`;
const Top = styled.div`
  ${tw`flex justify-end p-4`};
`;
const IconWrapper = styled.div`
  ${tw`flex justify-center items-center w-8 h-8 cursor-pointer`};
`;
