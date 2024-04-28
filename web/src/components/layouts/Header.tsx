import { Chip, Flex } from '@ma9pie/lite-ui';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FiMenu } from 'react-icons/fi';
import { RiNpmjsLine } from 'react-icons/ri';
import tw, { styled } from 'twin.macro';

import Frame from '@/components/layouts/Frame';
import { LITE_UI_GIT_REPOSITORY_URL, LITE_UI_NPM_URL } from '@/constants';
import useMobileNav from '@/hooks/useMobileNav';
import useNpm from '@/hooks/useNpm';

const Header = () => {
  const { liteuiVersion } = useNpm();
  const { openMobileNav } = useMobileNav();

  return (
    <Wrapper>
      <Frame>
        <Flex justify="between" items="center">
          <Flex items="center" gap={8}>
            <Link href="/">
              <Title>Lite UI</Title>
            </Link>
            {liteuiVersion && (
              <Chip size="sm" color="var(--neutral200)">
                <VersionText>{liteuiVersion}</VersionText>
              </Chip>
            )}
          </Flex>

          <Flex items="center" gap={4}>
            <Link href={LITE_UI_GIT_REPOSITORY_URL} target="_blank">
              <IconWrapper>
                <FaGithub size={24}></FaGithub>
              </IconWrapper>
            </Link>

            <Link href={LITE_UI_NPM_URL} target="_blank">
              <IconWrapper>
                <RiNpmjsLine size={24}></RiNpmjsLine>
              </IconWrapper>
            </Link>

            <IconWrapper className="sm:!hidden" onClick={openMobileNav}>
              <FiMenu size={24}></FiMenu>
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
const IconWrapper = styled.div`
  ${tw`flex justify-center items-center w-8 h-8 transition-colors duration-200 cursor-pointer`};
  ${tw`text-neutral-600`};
  ${tw`hover:text-neutral-800`};
`;
