import React from 'react';
import tw, { styled } from 'twin.macro';

import { AlignItem, FlexProps, JustifyContent } from '@/types';

const Flex = ({
  key,
  className,
  flex,
  wrap,
  col,
  gap,
  justify,
  items,
  children,
}: FlexProps) => {
  return (
    <Wrapper
      key={key}
      className={className}
      style={{
        flex: flex,
        gap: gap,
      }}
      col={col}
      $wrap={wrap}
      justify={justify}
      items={items}
    >
      {children}
    </Wrapper>
  );
};

export default Flex;

const Wrapper = styled.div<{
  col?: boolean;
  $wrap?: boolean;
  justify?: JustifyContent;
  items?: AlignItem;
}>`
  ${tw`flex`};
  ${(props) => props.col && tw`flex-col`};
  ${(props) => props.$wrap && tw`flex-wrap`};
  ${(props) => {
    switch (props.justify) {
      case 'start':
        return tw`justify-start`;
      case 'end':
        return tw`justify-end`;
      case 'center':
        return tw`justify-center`;
      case 'between':
        return tw`justify-between`;
      case 'evenly':
        return tw`justify-evenly`;
    }
  }};
  ${(props) => {
    switch (props.items) {
      case 'start':
        return tw`items-start`;
      case 'end':
        return tw`items-end`;
      case 'center':
        return tw`items-center`;
    }
  }};
`;
