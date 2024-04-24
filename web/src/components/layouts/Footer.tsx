import { Flex } from '@ma9pie/lite-ui';
import React from 'react';
import { SiVercel } from 'react-icons/si';
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
            <SiVercel size={24}></SiVercel>
            <Text>Vercel</Text>
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
  ${tw`text-2xl`};
`;
const SubText = styled.p`
  ${tw`text-neutral-400`};
`;
