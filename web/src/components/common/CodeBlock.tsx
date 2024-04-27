import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCheck, FaRegCopy } from 'react-icons/fa6';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import tw, { styled } from 'twin.macro';

/**
 * react-syntax-highlighter demo url
 * https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/
 */

interface Props {
  className?: string;
  code?: string;
}

const CodeBlock = ({ code = '', ...props }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = () => {
    setIsCopied(true);
  };

  return (
    <Wrapper {...props}>
      <SyntaxHighlighter
        language="typescript"
        style={vs2015}
        customStyle={{ padding: 0, backgroundColor: 'transparent' }}
      >
        {code}
      </SyntaxHighlighter>

      <CopyToClipboard text={code} onCopy={copyCode}>
        <IconWrapper isCopied={isCopied}>
          {isCopied ? (
            <FaCheck size={20}></FaCheck>
          ) : (
            <FaRegCopy size={20}></FaRegCopy>
          )}
        </IconWrapper>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled.div`
  ${tw`relative p-4 rounded-xl bg-neutral-800`};
`;
const IconWrapper = styled.div<{ isCopied: boolean }>`
  ${tw`absolute top-2 right-2 p-2 rounded-lg transition-colors duration-200 cursor-pointer`};
  ${tw`text-neutral-500`};
  ${tw`hover:(text-neutral-200 bg-neutral-600)`};
  ${({ isCopied }) => isCopied && tw`text-neutral-200`};
`;
