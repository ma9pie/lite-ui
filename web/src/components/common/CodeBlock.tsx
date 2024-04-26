import React from 'react';
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

const CodeBlock = ({ className, code = '' }: Props) => {
  return (
    <Wrapper className={className} language="typescript" style={vs2015}>
      {code}
    </Wrapper>
  );
};

export default CodeBlock;

const Wrapper = styled(SyntaxHighlighter)`
  ${tw`rounded-lg !p-4`};
`;
