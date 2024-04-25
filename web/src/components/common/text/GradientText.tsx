import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  from: string;
  to: string;
  children?: ReactNode;
}

const GradientText = ({ className, from, to, children }: Props) => {
  return (
    <Wrapper className={className} from={from} to={to}>
      {` ${children} `}
    </Wrapper>
  );
};

export default GradientText;

const Wrapper = styled.strong<{ from: string; to: string }>`
  ${tw`bg-clip-text text-transparent bg-gradient-to-b`};
  --tw-gradient-stops: ${({ from, to }) => `${from}, ${to}`};
`;
