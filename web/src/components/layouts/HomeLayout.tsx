import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Footer from '@/components/layouts/Footer';
import Frame from '@/components/layouts/Frame';
import Header from '@/components/layouts/Header';
import MobileNav from '@/components/layouts/MobileNav';

interface Props {
  children?: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <MobileNav></MobileNav>

      <Header></Header>

      <Container>
        <Frame>{children}</Frame>
      </Container>
      <Footer className="bg-neutral-50"></Footer>
    </Wrapper>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  ${tw`font-sans`};
`;
const Container = styled.div`
  ${tw`flex flex-col pt-16 min-h-[calc(100vh-224px)]`};
`;
