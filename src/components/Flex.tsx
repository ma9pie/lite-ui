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
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  flex-wrap: ${(props) => props.wrap && 'wrap'};
  flex: ${(props) => props.flex};
  gap: ${(props) => `${props.gap}px`};
  justify-content: ${(props) => justifyContent(props.justify)};
  align-items: ${(props) => alignItem(props.items)};
`;
