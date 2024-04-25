import { Flex } from '@ma9pie/lite-ui';
import Image from 'next/image';
import React from 'react';
import tw, { styled } from 'twin.macro';

import Content from '@/components/layouts/Content';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <Flex col items="center" gap={16}>
          <SubText>Made by ma9pie</SubText>
          <Flex items="center" gap={4}>
            <Text>Deployed on</Text>
            <LogoWrapper>
              <Image src="/images/logos/vercel.svg" fill alt="vercel"></Image>
            </LogoWrapper>
          </Flex>
        </Flex>
      </Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  ${tw`flex items-center h-56 font-medium bg-neutral-50`};
`;
const Text = styled.p`
  ${tw`text-xl`};
`;
const SubText = styled.p`
  ${tw`text-neutral-400`};
`;
const LogoWrapper = styled.div`
  ${tw`relative h-5 aspect-[107/24]`};
`;
