import styled from '@emotion/styled';
import React from 'react';

import { FlexProps } from '@/types';
import { alignItem, justifyContent } from '@/utils';

const Flex = (props: FlexProps) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Flex;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => gap && `${gap}px`};
  justify-content: ${({ justify }) => justifyContent(justify)};
  align-items: ${({ items }) => alignItem(items)};
`;
