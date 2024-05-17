import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children?: ReactNode;
}

const Headline = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Headline;

const Wrapper = styled.h1`
  ${tw`font-bold my-0`};
  ${tw`text-3xl text-center`};
  ${tw`sm:(text-5xl text-left)`};
`;
