import styled from '@emotion/styled';
import React from 'react';

import { FlexProps } from '@/types';
import { alignItem, justifyContent } from '@/utils';

const Flex = ({
  style,
  flex,
  wrap,
  col,
  gap,
  justify,
  items,
  ...props
}: FlexProps) => {
  return (
    <Wrapper
      flex={flex}
      wrap={wrap}
      col={col}
      justify={justify}
      items={items}
      style={{ gap, ...style }}
      {...props}
    >
      {props.children}
    </Wrapper>
  );
};

export default Flex;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ col }) => (col ? 'column' : 'row')};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  flex: ${({ flex }) => flex};
  justify-content: ${({ justify }) => justifyContent(justify)};
  align-items: ${({ items }) => alignItem(items)};
`;
