import styled from '@emotion/styled';
import React from 'react';

import { ListProps } from '@/types';

const List = ({ tabWidth = 16, gap = 8, children, ...props }: ListProps) => {
  return (
    <Wrapper tabWidth={tabWidth} gap={gap} {...props}>
      {children}
    </Wrapper>
  );
};

List.Ul = styled.ul``;
List.Li = styled.li``;

export default List;

// FIXME: Need efficient code
const Wrapper = styled.div<ListProps>`
  ul {
    margin-left: 20px;
    list-style-type: disc;
    ul {
      margin-left: ${({ tabWidth }) => `${tabWidth}px`};
      list-style-type: circle;
      ul {
        list-style-type: square;
        ul {
          list-style-type: disc;
          ul {
            list-style-type: circle;
            ul {
              list-style-type: square;
            }
          }
        }
      }
    }
  }
  li {
    margin-top: ${({ gap }) => `${gap}px`};
  }
`;
