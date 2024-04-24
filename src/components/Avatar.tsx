import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { FaUser } from 'react-icons/fa';

import { AvatarProps } from '../types';

const SIZE_MAP = {
  xs: '16px',
  sm: '24px',
  md: '32px',
  lg: '40px',
  xl: '48px',
};

const Avatar = ({ size = 'md', src, ...props }: AvatarProps) => {
  const avatarSize = useMemo(() => SIZE_MAP[size] || SIZE_MAP['md'], [size]);
  if (!src) {
    return (
      <Wrapper size={avatarSize} {...props}>
        <FaUser size="50%" color="var(--neutral400)"></FaUser>
      </Wrapper>
    );
  }
  return (
    <Wrapper size={avatarSize} {...props}>
      <ImageBox src={src}></ImageBox>
    </Wrapper>
  );
};

export default Avatar;

const Wrapper = styled.div<{ size: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 100%;
  background-color: var(--neutral200);
  overflow: hidden;
`;
const ImageBox = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background-image: ${({ src }) => `url('${src}')`};
  background-size: contain;
`;
