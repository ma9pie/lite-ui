import styled from '@emotion/styled';
import React from 'react';

import { ListProps, ListTreeNode } from '@/types';

const List = ({ list, tabWidth = 16, gap = 0 }: ListProps) => {
  const generateNestedList = (data?: ListTreeNode[]) => {
    if (!data) {
      return null;
    }
    return (
      <Ul tabWidth={tabWidth}>
        {data.map(({ key, value, children }) => (
          <Li key={key} gap={gap}>
            {value}
            {generateNestedList(children)}
          </Li>
        ))}
      </Ul>
    );
  };

  return <Wrapper>{generateNestedList(list)}</Wrapper>;
};

export default List;

// FIXME: Need efficient code
const Wrapper = styled.div`
  ul {
    list-style-type: disc;
    ul {
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
`;
const Ul = styled.ul<{ tabWidth: number }>`
  margin-left: 16px;
  ul {
    margin-left: ${({ tabWidth }) => `${tabWidth}px`};
  }
`;
const Li = styled.li<{ gap: number }>`
  margin-top: ${({ gap }) => `${gap}px`};
`;
