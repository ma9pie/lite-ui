import styled from '@emotion/styled';
import React from 'react';

import { FlexProps } from '@/types';

const Flex = ({ children, ...props }: FlexProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Flex;

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => (props.col ? 'column' : 'row')};
  flex-wrap: ${(props) => props.wrap && 'wrap'};
  flex: ${(props) => props.flex};
  gap: ${(props) => `${props.gap}px`};
  justify-content: ${(props) => {
    switch (props.justify) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
      case 'between':
        return 'space-between';
      case 'evenly':
        return 'space-evenly';
    }
  }};
  align-items: ${(props) => {
    switch (props.items) {
      case 'start':
        return 'flex-start';
      case 'end':
        return 'flex-end';
      case 'center':
        return 'center';
    }
  }};
`;
