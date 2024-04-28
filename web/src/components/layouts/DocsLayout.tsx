import { Flex } from '@ma9pie/lite-ui';
import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Footer from '@/components/layouts/Footer';
import Frame from '@/components/layouts/Frame';
import Header from '@/components/layouts/Header';
import MobileNav from '@/components/layouts/MobileNav';
import SideNav from '@/components/layouts/SideNav';

interface Props {
  children?: ReactNode;
}

const DocsLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <MobileNav></MobileNav>

      <Header></Header>

      <Container>
        <Frame>
          <Flex gap={16}>
            <SideNavWrapper>
              <SideNav></SideNav>
            </SideNavWrapper>
            <Flex col flex={1}>
              <Content>{children}</Content>
              <Footer></Footer>
            </Flex>
          </Flex>
        </Frame>
      </Container>
    </Wrapper>
  );
};

export default DocsLayout;

const Wrapper = styled.div`
  ${tw`font-sans`};
`;
const SideNavWrapper = styled.div`
  ${tw`w-56`};
  ${tw`hidden`};
  ${tw`sm:block`};
`;
const Container = styled.div`
  ${tw`flex flex-col pt-16 min-h-[calc(100vh-224px)]`};
`;
const Content = styled.div`
  ${tw`py-4 min-h-[calc(100vh-64px)]`};
  ${tw`w-[calc(100vw-32px)]`};
  ${tw`sm:w-[calc(100vw-288px)]`};
  ${tw`xl:w-auto`};
`;
