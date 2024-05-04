import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  children?: ReactNode;
}

const Frame = ({ className, children }: Props) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Frame;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col max-w-7xl w-full mx-auto`};
  ${tw`px-4`};
  ${tw`sm:px-6`};
`;
