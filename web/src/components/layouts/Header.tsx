import { Chip, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { RiNpmjsLine } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import Frame from '@/components/layouts/Frame';
import {
  LITE_UI_GIT_REPOSITORY_URL,
  LITE_UI_NPM_REGISTRY_API_URL,
  LITE_UI_NPM_URL,
} from '@/constants';
import { axios } from '@/utils';

const Header = () => {
  const [version, setVersion] = useState('');

  useEffect(() => {
    getVersion();
  }, []);

  const getVersion = async () => {
    const res: any = await axios.get(LITE_UI_NPM_REGISTRY_API_URL);
    const { latest } = res['dist-tags'];
    setVersion(`v${latest}`);
  };

  return (
    <Wrapper>
      <Frame>
        <Flex justify="between" items="center">
          <Flex items="center" gap={8}>
            <Link href="/">
              <Title>Lite UI</Title>
            </Link>
            {version && (
              <Chip size="sm" color="var(--neutral200)">
                <VersionText>{version}</VersionText>
              </Chip>
            )}
          </Flex>

          <Flex items="center" gap={8}>
            <IconWrapper href={LITE_UI_GIT_REPOSITORY_URL} target="_blank">
              <FaGithub size={24}></FaGithub>
            </IconWrapper>
            <IconWrapper href={LITE_UI_NPM_URL} target="_blank">
              <RiNpmjsLine size={24}></RiNpmjsLine>
            </IconWrapper>
          </Flex>
        </Flex>
      </Frame>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  ${tw`fixed top-0 flex items-center w-full h-16 backdrop-blur-lg z-10`};
`;
const Title = styled.p`
  ${tw`text-3xl font-semibold whitespace-nowrap`};
`;
const VersionText = styled.p`
  ${tw`text-xs font-medium`};
`;
const IconWrapper = styled(Link)`
  ${tw`flex justify-center items-center w-8 h-8 transition-colors duration-200`};
  ${tw`text-neutral-600`};
  ${tw`hover:text-neutral-800`};
`;
