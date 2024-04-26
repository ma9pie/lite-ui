import styled from '@emotion/styled';
import React from 'react';

import { CodeProps } from '@/types';

const CodeBlock = ({ code, ...props }: CodeProps) => {
  return <Wrapper {...props}>{code}</Wrapper>;
};

export default CodeBlock;

const Wrapper = styled.div`
  font-family: Hack;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: var(--neutral200);
`;
