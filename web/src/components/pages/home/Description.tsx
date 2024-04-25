import React, { ReactNode } from 'react';
import tw, { styled } from 'twin.macro';

interface Props {
  children?: ReactNode;
}

const Description = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Description;

const Wrapper = styled.div`
  ${tw`text-neutral-400`};
  ${tw`text-base text-center`};
  ${tw`sm:(text-xl text-left)`};
`;
