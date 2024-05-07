import styled from '@emotion/styled';
import React from 'react';
import { FaUser } from 'react-icons/fa';

import { AvatarProps } from '@/types';
import { getProperties } from '@/utils';

const SIZE_MAP = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
};

const Avatar = ({ size = 'md', src, alt = '', ...props }: AvatarProps) => {
  if (!src) {
    return (
      <Wrapper {...props}>
        <ImageBox size={size}>
          <FaUser size="50%" color="var(--neutral400)"></FaUser>
        </ImageBox>
      </Wrapper>
    );
  }

  return (
    <Wrapper {...props}>
      <ImageBox size={size}>
        <Image src={src} alt={alt}></Image>
      </ImageBox>
    </Wrapper>
  );
};

export default Avatar;

const Wrapper = styled.span``;
const ImageBox = styled.div<{ size: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: var(--neutral200);
  overflow: hidden;

  ${(props) => {
    const size = getProperties({
      defaultProp: 'md',
      optionalProp: props.size,
      obj: SIZE_MAP,
    });
    return `
    width: ${size};
    height: ${size};
    `;
  }}
`;
const Image = styled.img<{ src: string }>`
  width: 100%;
  height: 100%;
  background-size: contain;
`;
