import styled from '@emotion/styled';
import type { Meta } from '@storybook/react';
import React from 'react';

import { Avatar } from '@/components';
import { AvatarProps, AvatarSize } from '@/types';

interface Item {
  size: AvatarSize;
  imgNum: string;
}

const LIST: Item[] = [
  { size: 'xs', imgNum: '5' },
  { size: 'sm', imgNum: '11' },
  { size: 'md', imgNum: '37' },
  { size: 'lg', imgNum: '49' },
  { size: 'xl', imgNum: '67' },
];

const meta = {
  title: 'Avatar',
  args: {},
  component: Avatar,
} satisfies Meta;

export default meta;

const Component = ({}: AvatarProps) => {
  return (
    <Wrapper>
      <Container>
        {LIST.map((item) => (
          <Avatar
            key={item.imgNum}
            size={item.size}
            src={`https://i.pravatar.cc/150?img=${item.imgNum}`}
          ></Avatar>
        ))}
      </Container>

      <Container>
        {LIST.map((item) => (
          <Avatar key={item.imgNum} size={item.size}></Avatar>
        ))}
      </Container>
    </Wrapper>
  );
};

export const Avatar_ = {
  render: Component,
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
