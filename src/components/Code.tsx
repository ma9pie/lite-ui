import styled from '@emotion/styled';
import React, { useMemo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';

import { CodeProps } from '@/types';
import { getProperties } from '@/utils';

const SIZE = {
  sm: { fontSize: '12px', padding: '4px 8px', gap: '8px', iconSize: 12 },
  md: { fontSize: '14px', padding: '8px 12px', gap: '12px', iconSize: 16 },
  lg: { fontSize: '16px', padding: '12px 16px', gap: '16px', iconSize: 20 },
};

let pid: ReturnType<typeof setTimeout>;

const Code = ({
  size,
  code,
  full = false,
  hideIcon = false,
  ...props
}: CodeProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const { fontSize, padding, gap, iconSize } = useMemo(
    () =>
      getProperties({
        defaultProp: 'md',
        optionalProp: size,
        obj: SIZE,
      }),
    [size]
  );

  const handleCopy = () => {
    clearTimeout(pid);
    setIsCopied(true);
    pid = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  if (!code) {
    return null;
  }

  return (
    <Wrapper fontSize={fontSize} padding={padding} full={full} {...props}>
      <Container gap={gap}>
        <CodeBox>
          <code>{code}</code>
        </CodeBox>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <IconWrapper hidden={hideIcon} isCopied={isCopied}>
            {isCopied ? (
              <FaCheck size={iconSize}></FaCheck>
            ) : (
              <FaRegCopy size={iconSize}></FaRegCopy>
            )}
          </IconWrapper>
        </CopyToClipboard>
      </Container>
    </Wrapper>
  );
};

export default Code;

const Wrapper = styled.div<{
  fontSize: string;
  padding: string;
  full: boolean;
}>`
  position: relative;
  border-radius: 8px;
  background-color: var(--neutral200);
  font-size: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding};
  width: ${({ full }) => (full ? '100%' : 'fit-content')};
`;
const Container = styled.div<{ gap: string }>`
  display: flex;
  justify-content: space-between;
  gap: ${({ gap }) => gap};
`;
const CodeBox = styled.pre`
  line-height: 20px;
`;
const IconWrapper = styled.div<{ hidden: boolean; isCopied: boolean }>`
  transition: color 0.2s ease;
  cursor: pointer;
  display: ${({ hidden }) => hidden && 'none'};
  color: ${({ isCopied }) =>
    isCopied ? 'var(--neutral700)' : 'var(--neutral500)'};
  &:hover {
    color: var(--neutral700);
  }
`;
