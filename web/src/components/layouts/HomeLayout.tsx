import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

import Content from '@/components/layouts/Content';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

interface Props {
  children?: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header></Header>
      <Frame>
        <Content>{children}</Content>
      </Frame>
      <Footer></Footer>
    </Wrapper>
  );
};

export default HomeLayout;

const Wrapper = styled.div`
  ${tw``};
`;
const Frame = styled.div`
  ${tw`flex flex-col pt-16 min-h-[calc(100vh-224px)]`};
`;
