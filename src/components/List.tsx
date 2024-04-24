import styled from '@emotion/styled';
import React from 'react';

import { ListProps, ListTreeNode } from '../types';

const List = ({ list, tabWidth = 24, gap = 8 }: ListProps) => {
  const generateNestedList = (data?: ListTreeNode[]) => {
    if (!data) {
      return null;
    }
    return data.map(({ key, value, children }) => (
      <Ul tabWidth={tabWidth} gap={gap} key={key}>
        <Li>{value}</Li>
        {generateNestedList(children)}
      </Ul>
    ));
  };

  return generateNestedList(list);
};

export default List;

const Ul = styled.ul<{ tabWidth: number; gap: number }>`
  margin-left: 16px;
  list-style-type: disc;
  ul {
    margin-left: ${({ tabWidth }) => `${tabWidth}px`};
    margin-top: ${({ gap }) => `${gap}px`};
    list-style-type: circle;
    ul {
      list-style-type: square;
    }
  }
`;
const Li = styled.li``;
