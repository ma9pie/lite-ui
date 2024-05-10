import React, { useMemo, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  githubGist,
  vs2015,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import tw, { styled } from 'twin.macro';

/**
 * react-syntax-highlighter demo url
 * https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
 */

interface Props {
  className?: string;
  theme?: 'dark' | 'light';
  hideCopyIcon?: boolean;
  code?: string;
}

let pid: ReturnType<typeof setTimeout>;

const CodeBlock = ({
  theme = 'dark',
  hideCopyIcon,
  code = '',
  ...props
}: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const isDarkTheme = useMemo(() => theme === 'dark', [theme]);
  const iconColor = useMemo(() => {
    if (!isCopied) {
      return undefined;
    }
    return isDarkTheme ? 'var(--neutral200)' : 'var(--neutral600)';
  }, [isCopied, isDarkTheme]);

  const copyCode = () => {
    clearTimeout(pid);
    setIsCopied(true);
    pid = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <Wrapper {...props}>
      <SyntaxHighlighter
        className="scroll-x"
        language="typescript"
        style={isDarkTheme ? vs2015 : githubGist}
        customStyle={{
          border: '1px solid var(--neutral200)',
          lineHeight: 1.25,
          padding: 16,
          borderRadius: 12,
          minHeight: 54,
        }}
      >
        {code}
      </SyntaxHighlighter>

      {!hideCopyIcon && (
        <CopyToClipboard text={code} onCopy={copyCode}>
          <IconWrapper isCopied={isCopied} isDarkTheme={isDarkTheme}>
            {isCopied ? (
              <FaCheck size={20} color={iconColor}></FaCheck>
            ) : (
              <FaRegCopy size={20} color={iconColor}></FaRegCopy>
            )}
          </IconWrapper>
        </CopyToClipboard>
      )}
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  ${tw`relative`};
`;
const IconWrapper = styled.div<{ isCopied: boolean; isDarkTheme: boolean }>`
  ${tw`absolute top-2 right-2 p-2 rounded-lg transition-colors duration-200 cursor-pointer`};
  ${tw`text-neutral-500`};
  ${({ isDarkTheme }) =>
    isDarkTheme
      ? tw`hover:(text-neutral-200 bg-neutral-600)`
      : tw`hover:(text-neutral-600 bg-neutral-200)`};
`;
