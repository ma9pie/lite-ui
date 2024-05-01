import styled from '@emotion/styled';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';

import { CodeProps } from '@/types';

let pid: ReturnType<typeof setTimeout>;

const CodeBlock = ({ code = '', ...props }: CodeProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    clearTimeout(pid);
    setIsCopied(true);
    pid = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Wrapper {...props}>
      <Container>
        <CodeText>{code}</CodeText>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <IconWrapper isCopied={isCopied}>
            {isCopied ? (
              <FaCheck size={20}></FaCheck>
            ) : (
              <FaRegCopy size={20}></FaRegCopy>
            )}
          </IconWrapper>
        </CopyToClipboard>
      </Container>
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  position: relative;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: var(--neutral200);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 4px;
`;
const CodeText = styled.p`
  line-height: 20px;
`;
const IconWrapper = styled.div<{ isCopied: boolean }>`
  width: 20px;
  height: 20px;
  transition: color 0.2s ease;
  cursor: pointer;
  color: ${({ isCopied }) =>
    isCopied ? 'var(--neutral700)' : 'var(--neutral500)'};
  &:hover {
    color: var(--neutral700);
  }
`;
