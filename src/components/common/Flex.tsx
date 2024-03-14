import cn from 'classnames';
import React from 'react';
import tw, { styled } from 'twin.macro';

import { FlexProps } from '@/types';

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
      className={cn(
        className,
        col && 'flex-col',
        wrap && 'flex-wrap',
        justify && `justify-${justify}`,
        items && `items-${items}`
      )}
      style={{
        flex: flex,
        gap: gap,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default Flex;

const Wrapper = styled.div`
  ${tw`flex`};
`;
