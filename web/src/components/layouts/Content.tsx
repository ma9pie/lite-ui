import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  className?: string;
  children?: ReactNode;
}

const Content = ({ className, children }: Props) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Content;

const Wrapper = styled.div`
  ${tw`flex-1 flex flex-col max-w-7xl w-full mx-auto`};
`;
